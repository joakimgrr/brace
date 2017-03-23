const express = require('express');
const app = express();

const mw = require('./middleware')

const checkTimetableCache = mw.checkTimetableCache;
const fetchTimetable = mw.fetchTimetable;
const checkWeatherCache = mw.checkWeatherCache;
const fetchWeather = mw.fetchWeather;
const addCorsHeaders = mw.addCorsHeaders;

app.get('/timetable/:id', addCorsHeaders, checkTimetableCache, fetchTimetable);

app.get('/weather', addCorsHeaders, checkWeatherCache, fetchWeather);

app.listen(3000);
