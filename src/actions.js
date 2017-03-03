// action types
export const FETCH_TIMETABLE = 'FETCH_TIMETABLE'
export const RECEIVE_TIMETABLE = 'RECEIVE_TIMETABLE'

export function fetchTimetable() {
    // return {
    //     type: FETCH_TIMETABLE,
    //     test: 'nakki'
    // }

    return(dispatch) => {
        //TODO: fetch data from graphQL
        dispatch(receiveTimetable({ a: 'test', b: 'test1', c: 'test2'}));
    }
}

export function receiveTimetable(json) {
    return {
        type: RECEIVE_TIMETABLE,
        timetable: json
        //received at timestamp?
    }
}
