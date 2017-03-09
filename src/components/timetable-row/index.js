import React, { Component } from 'react';

const TimetableRow = (props) => {
    const arrivalTime = new Date(props.timetable.serviceDay * 1000 + props.timetable.realtimeArrival * 1000);
    const diffSeconds = (arrivalTime - new Date().getTime()) / 1000;
    const minutesTillArrival = Math.floor(diffSeconds / 60)

    return (
        <li>{minutesTillArrival}</li>
    )
}

export default TimetableRow
