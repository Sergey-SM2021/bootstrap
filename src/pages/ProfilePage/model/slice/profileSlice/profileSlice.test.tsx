import {
	ProfileReducer,
	toggleReadOnly,
	cancleEdit,
	editProfile,
} from "./profileSlice"
import { ProfileSchema } from "../../types/ProfileSchema"
import { Country, Currency } from "shared/const/common"
import { Citys } from "entity/City"

describe("Profile reducer", () => {
	it("toggle test", () => {
		const state: DeepPartial<ProfileSchema> = {
			readOnly: false,
		}
		const result: DeepPartial<ProfileSchema> = {
			readOnly: true,
		}
		expect(ProfileReducer(state as ProfileSchema, toggleReadOnly())).toEqual(
			result
		)
	})

	it("inverted toggle test", () => {
		const state: DeepPartial<ProfileSchema> = {
			readOnly: true,
		}

		const result: DeepPartial<ProfileSchema> = {
			readOnly: false,
		}

		expect(ProfileReducer(state as ProfileSchema, toggleReadOnly())).toEqual(
			result
		)
	})

	it("cancle edit возвращает editedProfile к исходному(profile) значению", () => {
		const profile = {
			age: 11,
			avatar: "profile.jpg",
			city: Citys.Tokyo,
			country: Country.Russia,
			currency: Currency.RUB,
			lastname: "in76guyyuuykj",
			name: "iu",
			nickname: "kk",
		}

		const state: DeepPartial<ProfileSchema> = {
			editedProfile: {
				age: 89,
				avatar: "https://",
				city: Citys.Delhi,
				country: Country.Mexico,
				currency: Currency.USD,
				lastname: "inkj",
				name: "54ddfgvh",
				nickname: "90jnhyvtr5ex",
			},
			profile,
		}

		expect(ProfileReducer(state as ProfileSchema, cancleEdit())).toEqual({
			data: {
				editedProfile: profile,
				profile,
			},
		})
	})

	it("профиль редактируется", () => {
		const state: DeepPartial<ProfileSchema> = {
			editedProfile: {
				age: 89,
				avatar: "https://",
				city: Citys.Delhi,
				country: Country.Mexico,
				currency: Currency.USD,
				lastname: "inkj",
				name: "54ddfgvh",
				nickname: "90jnhyvtr5ex",
			},
		}

		const expectetResult = {
			age: 489,
			avatar: "njknhttps://",
			city: Citys.Tokyo,
			country: Country.Russia,
			currency: Currency.RUB,
			lastname: "inkmoih78hbuyhjj",
			name: "54ddfgvh909jnkj",
			nickname: "90jn",
		}

		expect(
			ProfileReducer(state as ProfileSchema, editProfile(expectetResult))
		).toEqual({ data: { editedProfile: expectetResult } })
	})
})
