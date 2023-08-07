import { createSlice } from "@reduxjs/toolkit"
import { ArticlePageSchema } from "../types/ArticlePageSchema"

const initialState:ArticlePageSchema = {
	value: 0,
}

const ArticlePageSlice = createSlice({
	name: "ArticlePage",
	initialState,
	reducers: {
		test(state, payload:PayloadAction<string>) {
			state = payload.payload
		}
	}
})

export const {actions: ArticlePageActions} = ArticlePageSlice
export const {reducer: ArticlePageReducer} = ArticlePageSlice