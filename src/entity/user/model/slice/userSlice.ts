import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { UserSchema } from "../types/userType"
import { USER_LOCALSTORAGE_NAME } from "shared/const/localstorage"
import jwt_decode from "jwt-decode"

const initialState: UserSchema = {
	_inited: false
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, payload: PayloadAction<string>) {
			state.authData = jwt_decode(payload.payload)
		},
		initAuthData(state) {
			const user = localStorage.getItem(USER_LOCALSTORAGE_NAME)
			if (user) {
				state.authData = jwt_decode(JSON.parse(user))
			}
			state._inited = true
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
