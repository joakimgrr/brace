import { combineReducers } from 'redux'

import {
    FETCH_TIMETABLE,
    RECEIVE_TIMETABLE,
    FETCH_WEATHER,
    RECEIVE_WEATHER
} from './actions'

function timetables(state = [], action) {
    console.log('timetables', action)
    switch (action.type) {

        case FETCH_TIMETABLE:
            console.log('fetching timetable')
            return [
                ...state,
                {
                    text: action.test
                }
            ]
        case RECEIVE_TIMETABLE:
            return Object.assign({}, state, {
                [action.stopId]: action.timetable
            })
            //return action.timetable;

        default:
            return state

    }
}

function weather(state = [], action) {
    switch(action.type) {
        case RECEIVE_WEATHER:
            return action.weather

        default:
            return state
    }
}

const rootReducer = combineReducers({
    timetables,
    weather
})

export default rootReducer;
