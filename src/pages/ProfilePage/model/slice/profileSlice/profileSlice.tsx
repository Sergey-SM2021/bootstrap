import { PayloadAction } from "@reduxjs/toolkit"
import { ProfileSchema } from "../../types/ProfileSchema"
import { getProfile } from "../../services/getProfile/getProfile"
import { Country, Currency } from "shared/const/common"
import { updateProfile } from "../../services/updateProfile/updateProfile"
import { Citys } from "entity/City"
import { buildSlice } from "shared/lib/store/buildSlice/buildSlice"

const initialState: ProfileSchema = {
	error: "",
	readOnly: true,
	profile: {
		name: "",
		lastname: "",
		age: 22,
		city: Citys.Moscow,
		nickname: "",
		country: Country.Russia,
		avatar: "",
		currency: Currency.USD,
	},
	editedProfile: {
		name: "",
		lastname: "",
		age: 22,
		city: Citys.Moscow,
		nickname: "",
		country: Country.Russia,
		avatar: "",
		currency: Currency.USD,
	},
	profileValidateErrors: [],
	isLoading: false,
}

const profileSlice = buildSlice({
	initialState,
	name: "profile",
	reducers: {
		toggleReadOnly(state) {
			state.readOnly = !state.readOnly
		},
		editProfile(
			state,
			payload: PayloadAction<Partial<ProfileSchema["editedProfile"]>>
		) {
			state.editedProfile = {
				...state.editedProfile,
				...payload.payload,
			}
		},
		cancleEdit(state) {
			state.editedProfile = state.profile
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getProfile.fulfilled, (state, payload: PayloadAction<any>) => {
				state.profile = payload.payload
				state.editedProfile = payload.payload
				state.isLoading = false
			})
			.addCase(getProfile.rejected, (state, payload: PayloadAction<any>) => {
				state.error = payload.payload
				state.isLoading = false
			})
			.addCase(getProfile.pending, (state) => {
				state.isLoading = true
			})
			.addCase(updateProfile.pending, (state) => {
				state.isLoading = true
			})
			.addCase(updateProfile.fulfilled, (state) => {
				state.isLoading = false
				state.error = ""
			})
			.addCase(updateProfile.rejected, (state, payload: PayloadAction<any>) => {
				state.isLoading = false
				state.profileValidateErrors = payload.payload
			})
	},
})

export const { useActions } = profileSlice
export const {
	actions, 
	reducer: ProfileReducer,
} = profileSlice
