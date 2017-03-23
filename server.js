const express = require('express');
const app = express();

const mw = require('./middleware')

const checkTimetableCache = mw.checkTimetableCache;
const fetchTimetable = mw.fetchTimetable;
const checkWeatherCache = mw.checkWeatherCache;
const fetchWeather = mw.fetchWeather;

app.get('/timetable/:id', checkTimetableCache, fetchTimetable);

app.get('/weather', checkWeatherCache, fetchWeather);

app.listen(3000);
