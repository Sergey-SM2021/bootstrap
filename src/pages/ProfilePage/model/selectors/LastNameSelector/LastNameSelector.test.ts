import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { lastnameSelector } from "./LastNameSelector"
import { City } from "shared/const/common"

describe("lastname", () => {
	it("lastname", () => {
		const state: DeepPartial<StoreSchema> = {
			profile: {
				data: {
					editedProfile:{
						city: City.Delhi,
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
