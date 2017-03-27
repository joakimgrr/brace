import React, { Component } from 'react'

require('./current-weather.scss')

const ICONMAP = {
    'clear-day': 'wi-day-sunny',
    'clear-night': 'wi-night-clear',
    'rain': 'wi-rain',
    'snow': 'wi-snow',
    'sleet': 'wi-sleet',
    'wind': 'wi-windy',
    'fog': 'wi-fog',
    'cloudy': 'wi-cloudy',
    'partly-cloudy-day': 'wi-day-cloudy-high',
    'partly-cloudy-night': 'wi-night-partly-cloudy'
}

const CurrentWeather = ({ weather }) => {

    const iconId = weather && weather.icon;
    const temperature = weather && Math.round(weather.temperature);

    return(
        <div className="current-weather">
            <i className={`weather-icon wi ${ICONMAP[iconId]}`}></i>
            <span className="temperature">{temperature}</span><span className="degree">&deg;C</span>
        </div>
    )
}

export default CurrentWeather;
