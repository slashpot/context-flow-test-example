import {counterReducer} from "../reducer/counterReducer";
import TestRenderer from "react-test-renderer";
import React from "react";

let mockReducer;
let mockState;

function mockContext() {
    jest.doMock("../context/CounterContext", () => {
        mockReducer = (action) => {
            mockState = counterReducer(mockState, action);
        };

        mockState = {
            count: 0
        };

        return {
            CounterContext: React.createContext({
                counterState: mockState,
                counterDispatch: mockReducer
            })
        };
    });
}

describe("counter tests", () => {
    it("should count increase 1 when invoke increment func", async function () {
        mockContext();

        const Container = require("../component/Counter/CounterContainer").default;
        const MockComponent = Container((props) => {
            return <div>
                {props.count}
            </div>;
        });

        let testRenderer = TestRenderer.create(<MockComponent/>);
        testRenderer.toTree().rendered.props.increment();
        expect(mockState.count).toBe(1);
    });
});