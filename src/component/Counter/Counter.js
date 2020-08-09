import React from "react";
import CounterContainer from "./CounterContainer";

export const Counter = CounterContainer(props => {
    return(
        <div className="wrapper">
            <div className="btn-group">
                <button onClick={props.increment}>increment</button>
                <button onClick={props.decrement}>decrement</button>
            </div>
            <p>Counter: {props.count}</p>
        </div>
    )
})