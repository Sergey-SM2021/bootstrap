import { Profile, ProfileErrors } from "../../types/ProfileSchema"

export const validateProfile = (state:Profile) => {
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
	
	if (!state.nickname) {
		errors.push(ProfileErrors.nicknameError)
	}
	
	if (!state.currency) {
		console.log(state.currency)
		errors.push(ProfileErrors.CurrencyError)
	}
	
	if (!state.country) {
		errors.push(ProfileErrors.CountryError)
	}

	return errors
}
