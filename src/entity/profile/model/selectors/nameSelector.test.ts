import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { City } from "shared/const/common"
import { nameSelector } from "./NameSelector"

describe("name selector test", () => {
	it("name selector test", () => {
		const Store: DeepPartial<StoreSchema> = {
			profile: {
				data: {
					city: City.Tokyo,
					lastname: "yugb",
					name: "ydtrwqqqw2232",
				},
				error: "",
				isLoading: false,
				readOnly: true,
			},
		}
		expect(nameSelector(Store as StoreSchema)).toBe("ydtrwqqqw2232")
	})
})
