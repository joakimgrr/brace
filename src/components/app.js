import React from 'react';

require('./app.scss')

import Sidebar from './sidebar'

function App(props) {
    return (
        <div className="container">
            <Sidebar />
        </div>
    )
}

export default App;
