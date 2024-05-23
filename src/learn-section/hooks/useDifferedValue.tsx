import React, { useState, useDeferredValue, useMemo } from 'react';
const largeDataSet = Array.from({ length: 2 }, (_, index) => `Item ${index + 1}`);

 const UseDefferedValue = () => {
    const [inputValue, setInputValue] = useState('');
    const deferredInputValue = useDeferredValue(inputValue);

    const filteredItems = useMemo(() => {
        return largeDataSet.filter(item => item.toLowerCase().includes(deferredInputValue.toLowerCase()));
    }, [deferredInputValue]);

    return (
        <div className="grid-item">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Filter items"
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
 export default UseDefferedValue;