import { createSlice } from "@reduxjs/toolkit"
import { ProfileSchema } from "../types/ProfileSchema"

const initialState: ProfileSchema = {
	error: "",
	readonly: true,
	isLoading: false
}

const profileSlice = createSlice({
	initialState,
	name: "profile",
	reducers: {},
})

export const { reducer: ProfileReducer, actions } = profileSlice
