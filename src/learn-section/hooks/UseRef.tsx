import React, { useState, useRef } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef<number | null>(null); // useRef для хранения идентификатора интервала

    const startTimer = () => {
        if (intervalRef.current === null) {
            intervalRef.current = window.setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        }
    };

    const stopTimer = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const resetTimer = () => {
        setSeconds(0);
        stopTimer();
    };

    return (
        <div className="grid-item">
            <p>UseRef</p>
            <h1>Timer: {seconds}s</h1>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
};

export default Timer;
