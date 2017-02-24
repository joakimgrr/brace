import React, { Component } from 'react'
import SidebarButton from 'sidebar-button'
import { fetchTimetable } from '../../actions'
import { connect } from 'react-redux'

require('./sidebar.scss')

class Sidebar extends Component {

    componentDidMount() {
        console.log('did mount')
        const { dispatch } = this.props
        dispatch(fetchTimetable())
    }

    render() {
        return (
            <div className="sidebar">
                <SidebarButton cls="ion-grid"/>
                <SidebarButton cls="ion-grid"/>
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

export default connect(mapStateToProps)(Sidebar);
