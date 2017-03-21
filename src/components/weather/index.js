import React, { Component } from 'react'

import { fetchWeather } from 'actions'
import { connect } from 'react-redux'

import CurrentWeather from 'current-weather'

class Weather extends Component {
    componentWillMount() {
        const { dispatch } = this.props
        dispatch(fetchWeather())
    }

    render() {
        const currentWeather = this.props.weather && this.props.weather.currently;
        return (
            <div>
                <CurrentWeather weather={currentWeather}/>
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
