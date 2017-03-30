// action types
export const FETCH_TIMETABLE = 'FETCH_TIMETABLE'
export const RECEIVE_TIMETABLE = 'RECEIVE_TIMETABLE'
export const FETCH_WEATHER = 'FETCH_WEATHER'
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'

const SERVER_URL = 'http://localhost:3000/'

export function fetchTimetable(stopId) {
    return(dispatch) => {
        fetch(`${SERVER_URL}timetable/${stopId}`)
            .then(response => {
                return response.json()
            })
            .then(json => dispatch(receiveTimetable(json, stopId)));
    }
}

export function receiveTimetable(json, stopId) {
    return {
        type: RECEIVE_TIMETABLE,
        timetable: json,
        receivedAt: new Date().getTime(),
        stopId
    }
}

export function fetchWeather() {
    return(dispatch) => {
        fetch(`${SERVER_URL}weather`)
            .then(response => {
                return response.json()
            })
            .then(json => dispatch(receiveWeather(json)));
    }
}

export function receiveWeather(json) {
    return {
        type: RECEIVE_WEATHER,
        weather: json,
        receivedAt: new Date().getTime()
    }
}
