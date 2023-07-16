import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { getCounter } from "./getCounter"
import { DeepPartial } from "@reduxjs/toolkit"

describe("get counter test", () => {
	test("shuld return counter value", () => {
		const state: DeepPartial<StoreSchema> = {
			counter: { value: 15	},
		}
		expect(getCounter(state as StoreSchema)).toEqual({ value: 15 })
	})
})
