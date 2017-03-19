const Lokka = require('lokka').Lokka
const Transport = require('lokka-transport-http').Transport
const express = require('express');
const fetch = require('node-fetch');
const app = express();

require('dotenv').config()

const HSL_GRAPHQL_URL = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';
const WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/forecast/';
const HELSINKI = '658226';

const client = new Lokka({
    transport: new Transport(HSL_GRAPHQL_URL)
})

let timetableCache = null;
let weatherDataCache = null;

app.get('/', async (req, res) => {
    const timetableData = await fetchTimetable();

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    res.json(timetableData);
})

app.get('/weather', async (req, res) => {
    console.log('weather')
    const weatherData = await fetchWeatherData();

    console.log('weather data: ', weatherData)

    res.json(weatherData);
})

app.listen(3000);

async function fetchWeatherData() {
    const fetchUrl = `${WEATHER_MAP_URL}city?id=${HELSINKI}&APPID=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`
    console.log('fetchurl: ', fetchUrl)
    return fetch(fetchUrl)
        .then(res => {
            return res.json()
        });
}

async function fetchTimetable() {
    return timetableCache ? timetableCache : client.query(`
        {
            stop(id: "HSL:1130447") {
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
            const timetables = response.stop.stoptimesWithoutPatterns;

            timetableCache = timetables;
            return timetables
        });
}
