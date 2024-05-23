import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

// Provide a default value for the context
const defaultContextValue: ThemeContextType = {
    theme: 'light',
    toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

const ThemeContexts = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeContexts };
