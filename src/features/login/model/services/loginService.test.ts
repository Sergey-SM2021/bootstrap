import { $api } from "shared/api/api"
import axios from "axios"
import { login_action } from "./loginService"
import { Dispatch } from "@reduxjs/toolkit"
import { setUser } from "entity/user"

jest.mock("axios")

const mockedAxios = jest.mocked(axios)

describe("login action tests", () => {
	let dispatch: Dispatch
	let getState: VoidFunction

	beforeEach(() => {
		dispatch = jest.fn()
		getState = jest.fn()
	})

	it("success authtorization", async () => {
		mockedAxios.post.mockReturnValue(
			new Promise((resolve) => resolve({ data: { login: "123", id: 67 } }))
		)
		const action = login_action({ login: "123", password: "123" })
		const result = await action(dispatch, getState, {api: $api})
		expect(mockedAxios.post).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("fulfilled")
		expect(dispatch).toHaveBeenCalledTimes(3)
		expect(dispatch).toHaveBeenCalledWith(setUser({ login: "123", id: 67 }))
	})

	it("filed authtorization", async () => {
		mockedAxios.post.mockReturnValue(
			new Promise((resolve, reject) =>
				reject({ data: { login: "123", id: 67 } })
			)
		)
		const action = login_action({ login: "123", password: "123" })
		const result = await action(dispatch, getState, {api: $api})
		expect(result.meta.requestStatus).toBe("rejected")
		expect(mockedAxios.post).toHaveBeenCalled()
		expect(dispatch).toHaveBeenCalledTimes(2)
	})
})
