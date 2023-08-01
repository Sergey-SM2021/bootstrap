import { Dispatch } from "@reduxjs/toolkit"
import { updateProfile } from "./updateProfile"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import axios from "axios"
import { City, Country, Currency } from "shared/const/common"

jest.mock("axios")

const AxiosInstance = jest.mocked(axios)

describe("uptate profile", () => {
	const dispatch: jest.Mock<Dispatch> = jest.fn()
	const getState: () => DeepPartial<StoreSchema> = () => ({
		profile: {
			data: {
				editedProfile: {
					age: 783,
					avatar: "profile999.jpg",
					city: City.Shanghai,
					country: Country.Russia,
					currancy: Currency.RUB,
					lastname: "ikjnkn76guyyuuykj",
					name: "ijnkku",
					nikname: "k768hyk",
				},
			},
		},
	})

	const responce = {
		name: "",
		lastname: "",
		age: 22,
		city: City.Moscow,
		nikname: "",
		country: Country.Russia,
		avatar: "",
		currancy: Currency.USD,
	}

	it("update profile success", async () => {
		AxiosInstance.put.mockReturnValue(
			new Promise((resolve) => {
				resolve({
					data: responce,
				})
			})
		)
		const thunk = updateProfile()
		await thunk(dispatch, getState as () => StoreSchema, {
			api: AxiosInstance,
		})
		expect(dispatch).toHaveBeenCalledTimes(2)
		expect(dispatch.mock.lastCall[0].type).toBe("profile/update/fulfilled")
		expect(dispatch.mock.calls[0][0].type).toBe("profile/update/pending")
		expect(dispatch.mock.lastCall[0].payload.data).toBe(responce)
	})

	it("update profile failed", async () => {
		AxiosInstance.put.mockReturnValue(
			new Promise((resolve, reject) => {
				reject("update profile failed")
			})
		)
		const thunk = updateProfile()
		await thunk(dispatch, getState as () => StoreSchema, {
			api: AxiosInstance,
		})
		expect(dispatch).toHaveBeenCalledTimes(2)
		expect(dispatch.mock.calls[0][0].type).toBe("profile/update/pending")
		expect(dispatch.mock.lastCall[0].type).toBe("profile/update/rejected")
		expect(dispatch.mock.lastCall[0].payload).toBe("\"update profile failed\"")
	})
})
