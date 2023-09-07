import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { UserSchema } from "../types/userType"
import { USER_LOCALSTORAGE_NAME } from "shared/const/localstorage"
import { loginResponce } from "features/login/model/types/loginTypes"

const initialState: UserSchema = {
	_inited: false,
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<loginResponce>) {
			state.data = action.payload
		},
		initAuthData(state) {
			const user = localStorage.getItem(USER_LOCALSTORAGE_NAME)
			if (user) {
				state.data = JSON.parse(user)
			}
			state._inited = true
		},
		logout(state) {
			state.data = undefined
			localStorage.removeItem(USER_LOCALSTORAGE_NAME)
		},
	},
})

export const {
	actions: { setUser, initAuthData, logout },
} = userSlice
export const { reducer: userSliceReducer } = userSlice
