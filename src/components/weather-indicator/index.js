import React from 'react'

require('./weather-indicator.scss')

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

const WeatherIndicator = ({ weather }) => {

    const iconId = weather && weather.icon;
    const temperature = weather && Math.round(weather.temperature);
    const time = weather && weather.time && new Date(weather.time * 1000) || new Date();

    const hour = ('0' + time.getHours()).slice(-2);

    return(
        <div className="weather-indicator">
            <i className={`weather-icon wi ${ICONMAP[iconId]}`}></i>
            <span className="temperature">{temperature}</span><span className="degree">&deg;C</span>
            <span className="time">{hour}:00</span>
        </div>
    )
}

export default WeatherIndicator;
