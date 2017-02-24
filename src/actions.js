// action types
export const FETCH_TIMETABLE = 'FETCH_TIMETABLE'
export const RECEIVE_TIMETABLE = 'RECEIVE_TIMETABLE'

export function fetchTimetable() {
    return {
        type: FETCH_TIMETABLE,
        test: 'nakki'
    }
}

function receiveTimetable(json) {
    return {
        type: RECEIVE_TIMETABLE,
        timetable: json
        //received at timestamp?
    }
}
