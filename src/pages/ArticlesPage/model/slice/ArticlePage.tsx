import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	value: 0,
}

const ArticlePageSlice = createSlice({
	name: "ArticlePage",
	initialState,
	reducers: {
		test(state, payload) {
			state = payload.payload
		}
	}
})

export const {actions: ArticlePageActions} = ArticlePageSlice
export const {reducer: ArticlePageReducer} = ArticlePageSlice