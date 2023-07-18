import { User } from "./../types/userType"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { UserSchema } from "../types/userType"

const initialState: UserSchema = {
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, payload: PayloadAction<User>) {
			state.authData = payload.payload
		},
	},
})

export const { actions: {setUser} } = userSlice
export const { reducer: userSliceReducer } = userSlice
