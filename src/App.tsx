import React from 'react';
import './App.css';
import {StatefulForm} from "./learn-section/hooks/useActionState";
import {ThemeContexts} from "./learn-section/hooks/useContext/ThemeContext";
import ThemedComponent from './learn-section/hooks/useContext/ThemeComponent';
import UseCallBack from "./learn-section/hooks/useCallBack";
import LocalStorageComponent from "./learn-section/hooks/useDebugValue/LocalStorageComponent";

function App() {
    return (
        <div className="grid-container">
            <StatefulForm/>
            <UseCallBack/>
            <LocalStorageComponent/>
            <ThemeContexts>
                <ThemedComponent/>
            </ThemeContexts>
        </div>
    );
}

export default App;
