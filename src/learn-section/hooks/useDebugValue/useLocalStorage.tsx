import React, { useState, useDebugValue } from 'react';

// Custom hook to sync state with localStorage
function useLocalStorage(key: string, initialValue: any) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value: (arg0: any) => any) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };

    // Use useDebugValue to show the stored value in React DevTools
    useDebugValue(storedValue, value => `Local Storage (${key}): ${JSON.stringify(value)}`);

    return [storedValue, setValue];
}

export default useLocalStorage;
