import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { LoginSchema } from "../types/loginSchema"
import { login_action } from "../services/loginService"

const initialState: LoginSchema = {
	login: "",
	password: "",
	isLoading: false,
	error: "",
}

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		setLogin(state, payload: PayloadAction<string>) {
			state.login = payload.payload
		},
		setPassword(state, payload: PayloadAction<string>) {
			state.password = payload.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login_action.pending, (state) => {
				state.isLoading = true
			})
			.addCase(login_action.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
			.addCase(login_action.fulfilled, (state) => {
				state.isLoading = false
				state.error = ""
			})
	},
})

export const { reducer: loginSliceReducer } = loginSlice
export const {
	actions: { setLogin, setPassword },
} = loginSlice
