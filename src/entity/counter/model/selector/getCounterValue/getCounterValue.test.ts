import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import {getCounterValue} from "./getCounterValue"

describe("getCounter test", () => {
	test("getCounter selector return value properly", () => {
		const state:DeepPartial<StoreSchema> = {
			counter: {
				value: 140
			}
		}
		expect(getCounterValue(state as StoreSchema)).toBe(140)
	})
})
