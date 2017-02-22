import { combineReducers } from 'redux'

import { FETCH_TIMETABLE } from './actions'

function timetables(state = [], action) {
    switch (action.type) {
        case FETCH_TIMETABLE:
            return [
                ...state,
                {
                    text: action.test
                }
            ]
        default:
            return state

    }
}

const rootReducer = combineReducers({
    timetables
})

export default rootReducer;
