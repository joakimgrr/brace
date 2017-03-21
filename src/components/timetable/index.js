import React, { Component } from 'react'

import { fetchTimetable } from '../../actions'
import { connect } from 'react-redux'

import TimetableRow from 'timetable-row'

require('./timetable.scss')

class Timetable extends Component {
    componentWillMount() {
        const { dispatch } = this.props
        dispatch(fetchTimetable())
    }

    componentDidMount() {
        const { dispatch } = this.props

        setInterval(() => {
            dispatch(fetchTimetable())
        }, 1000 * 30)
    }

    render() {
        const timetables = this.props.timetables;

        return (
            <div className="timetable">
                {timetables.map((timetable) => <TimetableRow timetable={timetable} key={timetable.realtimeArrival}/> )}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { timetables } = state;

    return {
        timetables
    }
}

export default connect(mapStateToProps)(Timetable);
