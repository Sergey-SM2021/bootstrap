import { Dispatch } from "@reduxjs/toolkit"
import { getProfile } from "./getProfile"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import axios from "axios"
import { Country, Currency } from "shared/const/common"
import { Citys } from "entity/City/model/types/CitySchema"

jest.mock("axios")

const mockedAxios = jest.mocked(axios)

describe("getProfile", () => {
	const dispatch: jest.Mock<Dispatch> = jest.fn()
	const getState: () => StoreSchema = jest.fn()

	it("getProfile request with correct params should return profile data", async () => {
		const obj = {
			profile: {
				age: 11,
				avatar: "profile.jpg",
				city: Citys.Tokyo,
				country: Country.Russia,
				currency: Currency.RUB,
				lastname: "in76guyyuuykj",
				name: "iu",
				nickname: "kk",
			},
		}
		const thunk = getProfile(56)
		mockedAxios.get.mockReturnValue(
			new Promise((resolve) => {
				resolve({data:obj})
			})
		)
		await thunk(dispatch, getState, { api: axios })
		expect(dispatch).toBeCalledTimes(2)
		expect(dispatch.mock.calls[0][0].type).toBe("Profile/GetProfile/pending")
		expect(dispatch.mock.calls[1][0].type).toBe("Profile/GetProfile/fulfilled")
		expect(dispatch.mock.calls[1][0].payload).toBe(obj)
	})

	it("getProfile rejected", async () => {
		const obj = {
			profile: {
				age: 11,
				avatar: "profile.jpg",
				city: Citys.Tokyo,
				country: Country.Russia,
				currency: Currency.RUB,
				lastname: "in76guyyuuykj",
				name: "iu",
				nickname: "kk",
			},
		}

		const thunk = getProfile(56)
		
		mockedAxios.get.mockReturnValue(
			new Promise((resolve, reject) => {
				reject("Не удалось получить профиль")
			})
		)
		
		await thunk(dispatch, getState, { api: axios })
		expect(dispatch).toBeCalledTimes(2)
		expect(dispatch.mock.calls[0][0].type).toBe("Profile/GetProfile/pending")
		expect(dispatch.mock.calls[1][0].type).toBe("Profile/GetProfile/rejected")
		expect(dispatch.mock.calls[1][0].payload).toBe("can't get profile")
	})
})
