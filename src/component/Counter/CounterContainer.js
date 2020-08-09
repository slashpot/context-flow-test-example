import React, {useContext} from "react";
import {CounterContext} from "../../context/CounterContext";

export default Component => props => {
    const {counterState, counterDispatch} = useContext(CounterContext);

    const increment = () => {
        counterDispatch({type:"increment"});
    }

    const decrement = () => {
        counterDispatch({type:"decrement"});
    }

    props = {
        ...props,
        increment,
        decrement,
        count: counterState.count
    };

    return <Component {...props} />;
}