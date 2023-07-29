import { loginSliceReducer, setLogin, setPassword } from "./loginSlice"
import { LoginSchema } from "../types/loginSchema"

describe("login slice", () => {
	it("set login action", () => {
		const state: DeepPartial<LoginSchema> = {
			login: "",
			password: "",
			error: "",
			isLoading: false,
		}
		const expectedResult: DeepPartial<LoginSchema> = {
			login: "p",
			password: "",
			error: "",
			isLoading: false,
		}
		expect(loginSliceReducer(state as LoginSchema, setLogin("p"))).toEqual(
			expectedResult
		)
	})

	it("set password action", () => {
		const state: DeepPartial<LoginSchema> = {
			login: "",
			password: "",
			error: "",
			isLoading: false,
		}
		const expectedResult: DeepPartial<LoginSchema> = {
			login: "",
			password: "p",
			error: "",
			isLoading: false,
		}
		expect(loginSliceReducer(state as LoginSchema, setPassword("p"))).toEqual(
			expectedResult
		)
	})
})
