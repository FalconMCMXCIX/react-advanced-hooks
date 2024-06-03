import React, { useState } from 'react';
import { useSyncExternalStore } from 'react'; // Импортируем хук из библиотеки React

// Предположим, что у нас есть какой-то внешний стор, который мы хотим синхронизировать
// В этом примере просто имитируем стор с помощью простого объекта
const externalStore = {
    data: 0,
    isRunning: true, // Добавим флаг для управления запуском/остановкой счетчика
    subscribe(callback: () => void) {
        // Простая имитация подписки
        const interval = setInterval(() => {
            if (this.isRunning) {
                this.data++; // Имитация изменения данных
                callback(); // Вызываем колбэк при изменении данных
            }
        }, 1000);
        // Возвращаем функцию для отписки от изменений
        return () => clearInterval(interval);
    },
    getSnapshot() {
        // Получаем снимок данных
        return this.data;
    },
};

const Counter: React.FC = () => {
    // Используем хук useSyncExternalStore для синхронизации с внешним стором
    const localCount = useSyncExternalStore(
        externalStore.subscribe.bind(externalStore), // Подписываемся на изменения
        externalStore.getSnapshot.bind(externalStore) // Получаем снимок данных
    );

    const handleStopCounting = () => {
        externalStore.isRunning = false; // Останавливаем счетчик
    };

    return (
        <div className="grid-item">
            <h1>External Counter: {localCount}</h1>
            <button onClick={handleStopCounting}>Stop Counting</button>
        </div>
    );
};

export default Counter;
