import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { LoginSchema } from "../types/loginSchema"

const initialState: LoginSchema = {
	login: "",
	password: "",
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
})

export const { reducer: loginSliceReducer } =
  loginSlice
export const { actions : {setLogin, setPassword} } =
	loginSlice
