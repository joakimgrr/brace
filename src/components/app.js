import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../reducers'
import { fetchTimetable } from '../actions'

import Sidebar from './sidebar'
import Timetable from './timetable'
import Weather from './weather'

const ARABIA_STOP_ID='HSL:1130446'
const JATKASAARI_STOP_ID='HSL:1130447'

require('./app.scss')

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
)

function App(props) {
    return (
        <Provider store={store}>
            <div className="container">
                <div className="timetable-wrapper">
                    <div className="timetables">
                        <Timetable stopId={JATKASAARI_STOP_ID} />
                        <Timetable stopId={ARABIA_STOP_ID} />
                    </div>
                </div>
                <div className="weather-wrapper">
                    <Weather />
                </div>
            </div>
        </Provider>
    )
}

export default App;
