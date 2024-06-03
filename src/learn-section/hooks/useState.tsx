import React, { useState } from 'react';

const UseState = () => {
    // Инициализация состояния счетчика с помощью useState
    const [count, setCount] = useState(0);

    // Функции для увеличения и уменьшения счетчика
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div className="grid-item">
            <p>UseState</p>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default UseState;
