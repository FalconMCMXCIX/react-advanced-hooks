import React, { useState, useLayoutEffect, useRef } from 'react';

const MeasureComponent: React.FC = () => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const divRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (divRef.current) {
            const { width, height } = divRef.current.getBoundingClientRect();
            setDimensions({ width, height });
        }
    }, []);

    return (
        <div>
            <div ref={divRef} style={{ width: '100%', height: '200px', backgroundColor: 'lightblue' }}>
                Measure me!
            </div>
            <p>
                Width: {dimensions.width}px, Height: {dimensions.height}px
            </p>
        </div>
    );
};

const UseLayoutEffect: React.FC = () => {
    const [show, setShow] = useState(true);

    return (
        <div className="grid-item">
            <button onClick={() => setShow(!show)}>
                Toggle MeasureComponent
            </button>
            {show && <MeasureComponent />}
        </div>
    );
};

export default UseLayoutEffect;
