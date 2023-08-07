import { createSlice } from "@reduxjs/toolkit"
import { ArticleDetalisPageSchema } from "../types/ArticleDetalisPageSchema"

const initialState:ArticleDetalisPageSchema = {
	value: 0,
}

const ArticleDetalisPageSlice = createSlice({
	name: "ArticleDetalisPage",
	initialState,
	reducers: {
		test(state, payload:PayloadAction<string>) {
			state = payload.payload
		}
	}
})

export const {actions: ArticleDetalisPageActions} = ArticleDetalisPageSlice
export const {reducer: ArticleDetalisPageReducer} = ArticleDetalisPageSlice