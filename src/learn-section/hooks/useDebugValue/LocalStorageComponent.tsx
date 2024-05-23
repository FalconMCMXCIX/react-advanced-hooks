import React from 'react';
import useLocalStorage from './useLocalStorage';

function LocalStorageComponent() {
    const [name, setName] = useLocalStorage('name', 'John Doe');

    return (
        <div className="grid-item">
            <p>useDebugValue</p>
            <h3>Hello, {name}!</h3>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
}

export default LocalStorageComponent;
