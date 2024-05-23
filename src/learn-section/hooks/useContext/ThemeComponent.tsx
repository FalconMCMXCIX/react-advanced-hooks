import React, { useContext, CSSProperties } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemedComponent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles: { [key: string]: CSSProperties } = {
        light: {
            backgroundColor: 'white',
            color: 'black',
            padding: '10px',
            textAlign: 'center',
        },
        dark: {
            backgroundColor: 'black',
            color: 'white',
            padding: '10px',
            textAlign: 'center',
        },
    };

    return (
        <div style={theme === 'light' ? styles.light : styles.dark} className={"grid-item"}>
            <p>useContext</p>
            <p>The current theme is {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ThemedComponent;
