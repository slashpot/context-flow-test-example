import React, {useContext, useReducer} from "react";
import {Counter} from "./component/Counter/Counter";
import "./App.css";
import {CounterContext} from "./context/CounterContext";
import {counterReducer} from "./reducer/counterReducer";

function App() {
    const defaultState = useContext(CounterContext);
    const [counterState, counterDispatch] = useReducer(counterReducer, defaultState);
    return (
        <div className="App">
            <CounterContext.Provider value={{counterState, counterDispatch}}>
                <Counter/>
            </CounterContext.Provider>
        </div>
    );
}

export default App;
