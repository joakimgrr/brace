import React, { Component } from 'react'
import SidebarButton from 'sidebar-button'

require('./sidebar.scss')

class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar">
                <SidebarButton cls="ion-grid"/>
                <SidebarButton cls="ion-grid"/>
            </div>
        )
    }
}

export default Sidebar
