import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { CreateCommentSchema } from "../types/createCommentSchema"

const initialState: CreateCommentSchema = {
	isLoading: false,
	text: "",
}

const createCommentSlice = createSlice({
	name: "Create comment slice",
	initialState,
	reducers: {
		handlerChange(state, payload: PayloadAction<string>) {
			state.text = payload.payload
		},
		setError(state, payload: PayloadAction<string>) {
			state.error = payload.payload
		},
	},
	extraReducers(builder) {
		builder
	},
})

export const createCommentReducer = createCommentSlice.reducer
export const { handlerChange } = createCommentSlice.actions
