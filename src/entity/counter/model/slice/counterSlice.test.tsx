import { CounterSchema } from "../types/counterSchema"
import { counterSliceActions, counterSliceReducer } from "./counterSlice"

describe("counter slice test", () => {
	test("increment reducer increment work properly", () => {
		const state: CounterSchema = { value: 666 }
		expect(counterSliceReducer(state, counterSliceActions.increment)).toEqual({
			value: 667,
		})
	})
	test("decrement reducer decrement work properly", () => {
		const state: CounterSchema = { value: 666 }
		expect(counterSliceReducer(state, counterSliceActions.decrement)).toEqual({
			value: 665,
		})
	})
	test("empty state", () => {
		expect(
			counterSliceReducer(undefined, counterSliceActions.increment)
		).toEqual({
			value: 1,
		})
	})
})
