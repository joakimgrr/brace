import React, { Component } from 'react'

import { fetchTimetable } from '../../actions'
import { connect } from 'react-redux'

import TimetableRow from 'timetable-row'

require('./timetable.scss')

class Timetable extends Component {
    componentWillMount() {
        const { dispatch, stopId } = this.props
        dispatch(fetchTimetable(stopId))
    }

    componentDidMount() {
        const { dispatch } = this.props

        setInterval(() => {
            dispatch(fetchTimetable(this.props.stopId))
        }, 1000 * 30)
    }

    render() {
        const timetables = this.props.timetables[this.props && this.props.stopId];
        const headsign = timetables && timetables[0].trip.tripHeadsign;

        return (
            <div className="timetable">
                <span className="timetable__headsign">{headsign}</span>
                {timetables && timetables.map((timetable) => <TimetableRow timetable={timetable} key={timetable.realtimeArrival}/> )}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { timetables } = state

    return {
        timetables
    }
}

export default connect(mapStateToProps)(Timetable);
