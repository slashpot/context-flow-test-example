import {counterReducer} from "../../reducer/counterReducer";
import TestRenderer from "react-test-renderer";
import React from "react";

let mockReducer;
let mockState;

function mockContext(count) {
    jest.doMock("../../context/CounterContext", () => {
        mockReducer = (action) => {
            mockState = counterReducer(mockState, action);
        };

        mockState = {
            count
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
        jest.isolateModules(() => {
            let currentCount = 0;
            mockContext(currentCount);

            const Container = require("../../component/Counter/CounterContainer").default;
            const MockComponent = Container(() => <></>);

            let testRenderer = TestRenderer.create(<MockComponent/>);
            testRenderer.toTree().rendered.props.increment();

            expect(mockState.count).toBe(1);
        })
    });

    it("should count decrease 1 when invoke decrement func", async function () {
        jest.isolateModules(() => {
            let currentCount = 2;
            mockContext(currentCount);

            const Container = require("../../component/Counter/CounterContainer").default;
            const MockComponent = Container(() => <></>);

            let testRenderer = TestRenderer.create(<MockComponent/>);
            testRenderer.toTree().rendered.props.decrement();

            expect(mockState.count).toBe(1);
        })
    });


});