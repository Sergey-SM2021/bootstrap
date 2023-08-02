import { createAsyncThunk } from "@reduxjs/toolkit"
import { ProfileSchema } from "../../types/ProfileSchema"

enum ProfileErrors {
    AgeError = "AgeError",
    NameError = "NameError",
    LastNameError = "LastNameError",
    CityError = "CityError",
    NikNameError = "NikNameError",
    CountryError = "CountryError",
    AvatarError = "AvatarError",
    CurrencyError = "CurrencyError",
}

export const validateProfile = createAsyncThunk<
  Array<ProfileErrors>,
  void,
  { state: ProfileSchema }
>("profile/validateProfile", async (params, { getState }) => {
	const state = getState().data.editedProfile
	const errors = []
	if (Number.isNaN(state.age)) {
		errors.push(ProfileErrors.AgeError)
	}
	if (!state.name) {
		errors.push(ProfileErrors.NameError)
	}
	if (!state.lastname) {
		errors.push(ProfileErrors.LastNameError)
	}
	if (!state.city) {
		errors.push(ProfileErrors.CityError)
	}
	if (!state.avatar) {
		errors.push(ProfileErrors.AgeError)
	}
	if (!state.nikname) {
		errors.push(ProfileErrors.NikNameError)
	}
	if (!state.currancy) {
		errors.push(ProfileErrors.CurrencyError)
	}
	if (!state.country) {
		errors.push(ProfileErrors.CountryError)
	}
	return errors
})
