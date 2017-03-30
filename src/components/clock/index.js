import React from 'react';

const DAYS = [
    'Sunnuntai',
    'Maanantai',
    'Tiistai',
    'Keskiviikko',
    'Torstai',
    'Perjantai',
    'Lauantai'
]

require('./clock.scss')

const Clock = () => {
    const date = new Date();

    const weekday = DAYS[date.getDay()];
    const day = date.getDate();
    const month = date.getMonth() + 1;

    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);

    return (
        <span className="clock">{weekday} {day}.{month} {hours}:{minutes}</span>
    )
}

export default Clock;
