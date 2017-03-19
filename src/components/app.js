import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../reducers'
import { fetchTimetable } from '../actions'

import Sidebar from './sidebar'
import Timetable from './timetable'

require('./app.scss')

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
)

// console.log('store: ', store.getState())
// console.log('dispatch: ', store.dispatch(fetchTimetable()))
// console.log('store new: ', store.getState())


function App(props) {
    return (
        <Provider store={store}>
            <div className="container">
                <Timetable />
            </div>
        </Provider>
    )
}

export default App;
