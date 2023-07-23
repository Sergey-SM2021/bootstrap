import { User } from "./../types/userType"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { UserSchema } from "../types/userType"
import { USER_LOCALSTORAGE_NAME } from "shared/const/localstorage"

const initialState: UserSchema = {}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, payload: PayloadAction<User>) {
			state.authData = payload.payload
		},
		initAuthData(state) {
			const user = localStorage.getItem(USER_LOCALSTORAGE_NAME)
			if (user) {
				state.authData = JSON.parse(user)
			}
		},
		logout(state) {
			state.authData = undefined
			localStorage.removeItem(USER_LOCALSTORAGE_NAME)
		},
	},
})

export const {
	actions: { setUser, initAuthData, logout },
} = userSlice
export const { reducer: userSliceReducer } = userSlice
