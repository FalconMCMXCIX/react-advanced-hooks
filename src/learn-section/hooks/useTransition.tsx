import React, { useState, useTransition } from 'react';

function UseTransition() {
    const [isVisible, setIsVisible] = useState(false);
    const [isPending, startTransition] = useTransition();

    const toggleVisibility = () => {
        startTransition(() => {
            setIsVisible(!isVisible);
        });
    };

    return (
        <div className="grid-item">
            <p>UseTransition</p>
            <button onClick={toggleVisibility}>
                {isVisible ? 'Hide' : 'Show'} Element
            </button>
            {isPending ? (
                <p>Loading...</p>
            ) : (
                isVisible && <div style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }} />
            )}
        </div>
    );
}

export default UseTransition;
