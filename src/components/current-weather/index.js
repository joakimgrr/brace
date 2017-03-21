import React, { Component } from 'react'

require('./current-weather.scss')

const CurrentWeather = ({ weather }) => {

    const iconId = weather && weather.icon;
    const temperature = weather && Math.round(weather.temperature);

    return(
        <div className="current-weather">
            <i className="wi wi-rain"></i>
            <span className="temperature">{temperature}</span><span className="degree">&deg;C</span>
        </div>
    )
}

export default CurrentWeather;
