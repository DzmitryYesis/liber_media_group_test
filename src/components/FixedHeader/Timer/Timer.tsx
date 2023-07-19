import {useState, useEffect} from 'react';
import css from './Timer.module.scss';

type TimerPropsType = {
    minutes: number,
    seconds: number
}

export const Timer = ({minutes = 0, seconds = 0}: TimerPropsType) => {

    const [[m, s], setTime] = useState([minutes, seconds]);

    const tick = () => {

        if (m === 0 && s === 0) {
            setTime([minutes, seconds]);
        } else if (s == 0) {
            setTime([m - 1, 59]);
        } else {
            setTime([m, s - 1]);
        }
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });

    return (
        <span className={css.timer}>{`${m
            .toString()
            .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</span>
    );
};