import React, { useState, useCallback } from 'react';

function ChildComponent({ onClick } : {onClick: () => void}) {
    console.log('ChildComponent rendered');
    return <button onClick={onClick}>Click me</button>;
}

function ParentComponent() {
    const [count, setCount] = useState(0);

    // Define a callback function using useCallback to memoize it
    const handleClick = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    console.log('ParentComponent rendered');

    return (
        <div className={"grid-item"}>
            <p>useCallback</p>
            <h3>Count: {count}</h3>
            {/* Pass the memoized callback to the child component */}
            <ChildComponent onClick={handleClick} />
        </div>
    );
}

function UseCallBack() {
    return <ParentComponent />;
}

export default UseCallBack;
