const Lokka = require('lokka').Lokka
const Transport = require('lokka-transport-http').Transport
const express = require('express');
const fetch = require('node-fetch');
const app = express();

require('dotenv').config()

const HSL_GRAPHQL_URL = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';
const WEATHER_URL = 'https://api.darksky.net/forecast';
const HELSINKI = '60.1699,24.9384';

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

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    res.json(weatherData);
})

app.listen(3000);

async function fetchWeatherData() {
    const fetchUrl = `${WEATHER_URL}/${process.env.DARK_SKY_API_KEY}/${HELSINKI}?units=si`
    console.log('fetchurl: ', fetchUrl)
    return weatherDataCache ? weatherDataCache : fetch(fetchUrl)
        .then(res => {
            let data = res.json();
            weatherDataCache = data
            return data;
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