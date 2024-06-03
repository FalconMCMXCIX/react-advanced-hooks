import React from 'react';
import './App.css';
import {StatefulForm} from "./learn-section/hooks/useActionState";
import {ThemeContexts} from "./learn-section/hooks/useContext/ThemeContext";
import ThemedComponent from './learn-section/hooks/useContext/ThemeComponent';
import UseCallBack from "./learn-section/hooks/useCallBack";
import LocalStorageComponent from "./learn-section/hooks/useDebugValue/LocalStorageComponent";
import UseDefferedValue from "./learn-section/hooks/useDifferedValue";
import UseEffect from "./learn-section/hooks/useEffect";
import UseImperativeHandle from "./learn-section/hooks/useImperativeHandle";
import UseId from "./learn-section/hooks/UseId";
import UseInsertionEffect from "./learn-section/hooks/UseInsertionEffect";
import UseLayoutEffect from "./learn-section/hooks/UseLayoutEffect";
import UseMemo from "./learn-section/hooks/useMemo";
import UseOptimistic from "./learn-section/hooks/useOptimistic";
import UseReducer from "./learn-section/hooks/useReducer";
import UseState from "./learn-section/hooks/useState";
import UseRef from "./learn-section/hooks/UseRef";
import UseSyncExternalStore from "./learn-section/hooks/useSyncExternalStore";
import UseTransition from "./learn-section/hooks/useTransition";


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
            <UseEffect url={"https://jsonplaceholder.typicode.com/users?id=1"}/>
            <UseId/>
            <UseImperativeHandle/>
            <UseInsertionEffect/>
            <UseLayoutEffect/>
            <UseMemo/>
            <UseOptimistic/>
            <UseReducer/>
            <UseState/>
            <UseRef/>
            <UseSyncExternalStore/>
            <UseTransition/>
        </div>
    );
}

export default App;
