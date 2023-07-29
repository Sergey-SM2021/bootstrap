import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ProfileSchema } from "../types/ProfileSchema"
import { getProfile } from "../services/getProfile"

const initialState: ProfileSchema = {
	error: "",
	readOnly: true,
	isLoading: false,
}

const profileSlice = createSlice({
	initialState,
	name: "profile",
	reducers: {
		
	},
	extraReducers(builder) {
		builder.addCase(
			getProfile.fulfilled,
			(state, payload: PayloadAction<ProfileSchema["data"]>) => {
				state.data = payload.payload
				state.isLoading = false
			}
		)
	},
})

export const { reducer: ProfileReducer, actions } = profileSlice
