import { combineReducers } from 'redux'

import { FETCH_TIMETABLE, RECEIVE_TIMETABLE } from './actions'

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
        // case RECEIVE_TIMETABLE:
        //
        //     return [
        //         ...state,
        //         timetables: action.timetable
        //     ]

        default:
            return state

    }
}

const rootReducer = combineReducers({
    timetables
})

export default rootReducer;
