// action types
export const FETCH_TIMETABLE = 'FETCH_TIMETABLE'
export const RECEIVE_TIMETABLE = 'RECEIVE_TIMETABLE'

const SERVER_URL = 'http://localhost:3000/'

export function fetchTimetable() {
    return(dispatch) => {
        fetch(SERVER_URL)
            .then(response => {
                return response.json()
            })
            .then(json => dispatch(receiveTimetable(json)));
    }
}

export function receiveTimetable(json) {
    return {
        type: RECEIVE_TIMETABLE,
        timetable: json
        //received at timestamp?
    }
}
