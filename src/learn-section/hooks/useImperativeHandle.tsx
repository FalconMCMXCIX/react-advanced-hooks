import React, { useRef, useState, useImperativeHandle, forwardRef } from 'react';

// Интерфейс для методов, которые будут доступны через ref
interface CustomInputHandle {
    focus: () => void;
    reset: () => void;
}

// Дочерний компонент, предоставляющий методы focus и reset
const CustomInput = forwardRef<CustomInputHandle, {}>((props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState<string>('');

    useImperativeHandle(ref, () => ({
        focus() {
            inputRef.current?.focus();
        },
        reset() {
            setValue('');
        },
    }));

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <input
            ref={inputRef}
            value={value}
            onChange={handleChange}
            type="text"
            placeholder="Enter text"
        />
    );
});

// Родительский компонент, который использует ref для вызова методов focus и reset
const ParentComponent: React.FC = () => {
    const inputRef = useRef<CustomInputHandle>(null);

    const handleFocus = () => {
        inputRef.current?.focus();
    };

    const handleReset = () => {
        inputRef.current?.reset();
    };

    return (
        <div className="grid-item">
            <p>UseImperativeHandle</p>
            <CustomInput ref={inputRef} />
            <button onClick={handleFocus}>Focus Input</button>
            <button onClick={handleReset}>Reset Input</button>
        </div>
    );
};

export default ParentComponent;
