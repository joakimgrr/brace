import React from 'react';
import SidebarButton from 'sidebar-button'

require('./sidebar.scss')

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarButton cls="ion-grid"/>
            <SidebarButton cls="ion-grid"/>
        </div>
    )
}

export default Sidebar;
