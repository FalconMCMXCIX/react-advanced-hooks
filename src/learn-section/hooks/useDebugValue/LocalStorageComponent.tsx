import React from 'react';
import useLocalStorage from './useLocalStorage';

function LocalStorageComponent() {
    const [name, setName] = useLocalStorage('name', 'John Doe');

    return (
        <div className="grid-item">
            <h1>Hello, {name}!</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
}

export default LocalStorageComponent;
