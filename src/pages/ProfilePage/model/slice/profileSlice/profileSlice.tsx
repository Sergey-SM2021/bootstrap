import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ProfileSchema } from "../../types/ProfileSchema"
import { getProfile } from "../../services/getProfile/getProfile"
import { City, Country, Currency } from "shared/const/common"
import { updateProfile } from "../../services/updateProfile/updateProfile"

const initialState: ProfileSchema = {
	error: "",
	readOnly: true,
	data: {
		profile: {
			name: "",
			lastname: "",
			age: 22,
			city: City.Moscow,
			nikname: "",
			country: Country.Russia,
			avatar: "",
			currancy: Currency.USD,
		},
		editedProfile: {
			name: "",
			lastname: "",
			age: 22,
			city: City.Moscow,
			nikname: "",
			country: Country.Russia,
			avatar: "",
			currancy: Currency.USD,
		},
	},
	isLoading: false,
}

const profileSlice = createSlice({
	initialState,
	name: "profile",
	reducers: {
		toggleReadOnly(state) {
			state.readOnly = !state.readOnly
		},
		editProfile(
			state,
			payload: PayloadAction<Partial<ProfileSchema["data"]["editedProfile"]>>
		) {
			state.data.editedProfile = {
				...state.data.editedProfile,
				...payload.payload,
			}
		},
		cancleEdit(state) {
			state.data.editedProfile = state.data.profile
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getProfile.fulfilled, (state, payload: PayloadAction<any>) => {
				state.data.profile = payload.payload
				state.data.editedProfile = payload.payload
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
			.addCase(updateProfile.rejected, (state, payload) => {
				state.isLoading = false
				state.error = payload.payload as string
			})
	},
})

export const {
	reducer: ProfileReducer,
	actions: { editProfile, toggleReadOnly, cancleEdit },
} = profileSlice
