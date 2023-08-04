import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { lastnameSelector } from "./LastNameSelector"
import { Citys } from "entity/City/model/types/CitySchema"

describe("lastname", () => {
	it("lastname", () => {
		const state: DeepPartial<StoreSchema> = {
			profile: {
				data: {
					editedProfile:{
						city: Citys.Delhi,
						lastname: "jojyKlim",
						name: "loloy",
					}
				},
				error: "",
				isLoading: false,
				readOnly: false,
			},
		}

		expect(lastnameSelector(state as StoreSchema)).toBe("jojyKlim")
	})
})
