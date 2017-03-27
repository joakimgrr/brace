const Lokka = require('lokka').Lokka
const Transport = require('lokka-transport-http').Transport
const fetch = require('node-fetch');

const HSL_GRAPHQL_URL = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';
const WEATHER_URL = 'https://api.darksky.net/forecast';
const HELSINKI = '60.1699,24.9384';

const FIFTEEN_SECONDS = 15000;
const HOUR = 3600000;

const client = new Lokka({
    transport: new Transport(HSL_GRAPHQL_URL)
})

require('dotenv').config()

let timetableCache = {};
let weatherCache = {};

export function checkTimetableCache(req, res, next) {
    const stopId = req.params.id;
    console.log('Checking timetable cache for: ', stopId)
    const now = new Date().getTime();

    if( timetableCache[stopId] &&
        timetableCache[stopId].data &&
        ((timetableCache[stopId].fetchedAt + FIFTEEN_SECONDS) > now)
    ) {
        res.json(timetableCache[stopId].data)
    } else {
        next()
    }
}

export function checkWeatherCache(req, res, next) {
    console.log('Checking weather cache')
    const now = new Date().getTime();

    if( weatherCache.data &&
        ((weatherCache.fetchedAt + HOUR) > now)
    ) {
        res.json(weatherCache.data)
    } else {
        next()
    }
}

export function fetchTimetable(req, res, next) {
    const stopId = req.params.id;
    console.log('fetching timetable for: ', stopId)

    client.query(`
        {
            stop(id: "${stopId}") {
                stoptimesWithoutPatterns(timeRange: 10000) {
                    trip {
                        gtfsId,
                        tripHeadsign,
                        route {
                            shortName
                        }
                    },
                    realtimeArrival,
                    realtime,
                    scheduledArrival,
                    serviceDay
                }
            }
        }
        `)
        .then(response => {
            const data = response.stop.stoptimesWithoutPatterns;

            timetableCache[stopId] = {
                data,
                fetchedAt: new Date().getTime()
            }

            res.json(data)
        });
}

export function fetchWeather(req, res, next) {
    const fetchUrl = `${WEATHER_URL}/${process.env.DARK_SKY_API_KEY}/${HELSINKI}?units=si`

    fetch(fetchUrl)
        .then(result => {
            return result.json()
        })
        .then(data => {
            weatherCache = {
                data,
                fetchedAt: new Date().getTime()
            }

            res.json(data)
        })
}

export function addCorsHeaders(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next()
}
