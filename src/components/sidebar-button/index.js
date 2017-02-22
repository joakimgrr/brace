import React from 'react';

require('./sidebar-button.scss')

function SidebarButton(props) {
    return (
        <span className="icon-wrapper">
            <span className={'icon ' + props.cls}></span>
        </span>
    )
}

export default SidebarButton;
