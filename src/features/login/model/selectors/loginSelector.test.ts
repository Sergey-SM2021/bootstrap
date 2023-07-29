import { DeepPartial } from "@reduxjs/toolkit"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { LoginFormErrorSelector, LoginFormIsLoadingSelector, LoginFormLoginSelector, LoginFormPasswordSelector } from "./loginSelector"

describe("login selectors", () => {
	it("LoginFormLoginSelector", () => {
		const state: DeepPartial<StoreSchema> = {
			login: { login: "sergey" },
		}
		expect(LoginFormLoginSelector(state as StoreSchema)).toBe("sergey")
	})

	it("LoginFormPasswordSelector", () => {
		const state: DeepPartial<StoreSchema> = {
			login: { password: "342" },
		}
		expect(LoginFormPasswordSelector(state as StoreSchema)).toBe("342")
	})

	it("LoginFormIsLoadingSelector", () => {
		const state: DeepPartial<StoreSchema> = {
			login: {
				isLoading: false,
			},
		}
		expect(LoginFormIsLoadingSelector(state as StoreSchema)).toBeFalsy()
	})

	it("LoginFormLoginSelector", () => {
		const state: DeepPartial<StoreSchema> = {
			login: { error: "gg" },
		}
		expect(LoginFormErrorSelector(state as StoreSchema)).toBe("gg")
	})
})
