import React, { useReducer } from 'react';

// Определяем типы для состояния и действий
type State = {
    count: number;
};

type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };

// Создаем редуктор для обработки действий над счетчиком
const counterReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const UseReducer: React.FC = () => {
    // Инициализируем счетчик состояния и функцию dispatch с помощью useReducer
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <div className="grid-item">
            <p>UseReducer</p>
            <p>Count: {state.count}</p>
            {/* Кнопки для увеличения и уменьшения счетчика */}
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    );
};

export default UseReducer;
