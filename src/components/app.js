import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../reducers'
import { fetchTimetable } from '../actions'

import Sidebar from './sidebar'
import Timetable from './timetable'
import Weather from './weather'

require('./app.scss')

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
)

function App(props) {
    return (
        <Provider store={store}>
            <div className="container">
                <Timetable />
                <Weather />
            </div>
        </Provider>
    )
}

export default App;
