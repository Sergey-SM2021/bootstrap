import {
	ProfileReducer,
	toggleReadOnly,
	cancleEdit,
	editProfile,
} from "./profileSlice"
import { ProfileSchema } from "../../types/ProfileSchema"
import { City, Country, Currency } from "shared/const/common"

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
			city: City.Tokyo,
			country: Country.Russia,
			currency: Currency.RUB,
			lastname: "in76guyyuuykj",
			name: "iu",
			nikname: "kk",
		}

		const state: DeepPartial<ProfileSchema> = {
			data: {
				editedProfile: {
					age: 89,
					avatar: "https://",
					city: City.Delhi,
					country: Country.Mexico,
					currency: Currency.USD,
					lastname: "inkj",
					name: "54ddfgvh",
					nikname: "90jnhyvtr5ex",
				},
				profile,
			},
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
			data: {
				editedProfile: {
					age: 89,
					avatar: "https://",
					city: City.Delhi,
					country: Country.Mexico,
					currency: Currency.USD,
					lastname: "inkj",
					name: "54ddfgvh",
					nikname: "90jnhyvtr5ex",
				},
			},
		}

		const expectetResult = {
			age: 489,
			avatar: "njknhttps://",
			city: City.Tokyo,
			country: Country.Russia,
			currency: Currency.RUB,
			lastname: "inkmoih78hbuyhjj",
			name: "54ddfgvh909jnkj",
			nikname: "90jn",
		}

		expect(
			ProfileReducer(state as ProfileSchema, editProfile(expectetResult))
		).toEqual({ data: { editedProfile: expectetResult } })
	})
})
