import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../reducers'

import Sidebar from './sidebar'

require('./app.scss')

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
)

function App(props) {
    return (
        <Provider store={store}>
            <div className="container">
                <Sidebar />
            </div>
        </Provider>
    )
}

export default App;
