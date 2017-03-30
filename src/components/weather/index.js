import React, { Component } from 'react'

import { fetchWeather } from 'actions'
import { connect } from 'react-redux'

import WeatherIndicator from 'weather-indicator'

require('./weather.scss')

class Weather extends Component {
    componentWillMount() {
        const { dispatch } = this.props
        dispatch(fetchWeather())
    }

    render() {
        const currentWeather = this.props.weather && this.props.weather.currently;
        const upcomingWeathers = this.props.weather && this.props.weather.hourly && this.props.weather.hourly.data;

        console.log(this.props.weather)

        return (
            <div className="weather">
                <div className="weather__current-weather">
                    <WeatherIndicator weather={currentWeather}/>
                </div>
                <div className="weather__upcoming-weather">
                    <WeatherIndicator weather={upcomingWeathers && upcomingWeathers[2]}/>
                    <WeatherIndicator weather={upcomingWeathers && upcomingWeathers[4]}/>
                    <WeatherIndicator weather={upcomingWeathers && upcomingWeathers[6]}/>
                    <WeatherIndicator weather={upcomingWeathers && upcomingWeathers[8]}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { weather } = state;

    return {
        weather
    }
}

export default connect(mapStateToProps)(Weather);
