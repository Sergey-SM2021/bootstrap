import { createSlice } from "@reduxjs/toolkit"
import { ArticleSchema } from "../types/ArticleSchema"
import { getArticle } from "../services/getArticle/getArticle"

const initialState: ArticleSchema = {
	isLoading: false,
}

const ArticleSlice = createSlice({
	name: "Article",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getArticle.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.data = payload
		})
		builder.addCase(getArticle.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(getArticle.rejected, (state, { payload }) => {
			state.isLoading = false
			state.error = payload
		})
	},
})

export const { actions: ArticleActions } = ArticleSlice
export const { reducer: ArticleReducer } = ArticleSlice
