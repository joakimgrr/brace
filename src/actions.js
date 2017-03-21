// action types
export const FETCH_TIMETABLE = 'FETCH_TIMETABLE'
export const RECEIVE_TIMETABLE = 'RECEIVE_TIMETABLE'
export const FETCH_WEATHER = 'FETCH_WEATHER'
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'

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

export function fetchWeather() {
    return(dispatch) => {
        fetch(`${SERVER_URL}weather`)
            .then(response => {
                console.log('response: ', response)
                return response.json()
            })
            .then(json => dispatch(receiveWeather(json)));
    }
}

export function receiveWeather(json) {
    return {
        type: RECEIVE_WEATHER,
        weather: json
    }
}
