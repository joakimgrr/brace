const Lokka = require('lokka').Lokka
const Transport = require('lokka-transport-http').Transport
const express = require('express');
const app = express();


const HSL_GRAPHQL_URL = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';
const client = new Lokka({
    transport: new Transport(HSL_GRAPHQL_URL)
})

let timetableCache = null;

app.get('/', async (req, res) => {
    const timetableData = await fetchTimetable();

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    res.json(timetableData);
})

app.listen(3000);

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
