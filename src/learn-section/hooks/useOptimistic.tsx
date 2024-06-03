import React, { useState, useCallback } from 'react';

type UpdateFunction<T> = (currentState: T, newValue: T) => T;

const useOptimistic = <T,>(initialState: T, updateFn: UpdateFunction<T>): [T, (newValue: T) => void] => {
    const [state, setState] = useState<T>(initialState);

    const addOptimistic = useCallback((newValue: T) => {
        setState((currentState) => {
            const optimisticState = updateFn(currentState, newValue);
            setState(optimisticState); // Устанавливаем оптимистическое состояние немедленно
            return currentState; // Возвращаем текущее состояние
        });
    }, [updateFn]);

    return [state, addOptimistic];
};

// Пример использования
const UseReducer: React.FC = () => {
    const [state, addOptimistic] = useOptimistic<number>(0, (currentState, newValue) => {
        // Функция обновления состояния
        return currentState + newValue;
    });

    const handleClick = () => {
        addOptimistic(1); // Добавляем оптимистическое обновление
        // Здесь можно отправить запрос на сервер
        // После успешного ответа можно выполнить дополнительные действия
    };

    return (
        <div className="grid-item">
            <p>UseOptimistic</p>
            <p>State: {state}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
};

export default UseReducer;
