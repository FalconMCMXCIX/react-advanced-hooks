import React from 'react';
import './App.css';
import {StatefulForm} from "./learn-section/hooks/useActionState";
import {ThemeContexts} from "./learn-section/hooks/useContext/ThemeContext";
import ThemedComponent from './learn-section/hooks/useContext/ThemeComponent';
import UseCallBack from "./learn-section/hooks/useCallBack";
import LocalStorageComponent from "./learn-section/hooks/useDebugValue/LocalStorageComponent";
import UseDefferedValue from "./learn-section/hooks/useDifferedValue";

function App() {
    return (
        <div className="grid-container">
            <StatefulForm/>
            <UseCallBack/>
            <LocalStorageComponent/>
            <ThemeContexts>
                <ThemedComponent/>
            </ThemeContexts>
            <UseDefferedValue/>
        </div>
    );
}

export default App;
