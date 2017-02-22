// action types
export const FETCH_TIMETABLE = 'FETCH_TIMETABLE';

export function fetchTimetable(test) {
    return { type: FETCH_TIMETABLE, test }
}
