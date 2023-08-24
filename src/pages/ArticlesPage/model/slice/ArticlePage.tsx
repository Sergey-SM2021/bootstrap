import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { Article } from "entity/Article/model/types/Article"
import { getArticles } from "../services/getArticles"
import { ArticlePageSchema } from "../types/articleSchema"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

const articleAdapter = createEntityAdapter<Article>()

const initialState: ArticlePageSchema = articleAdapter.getInitialState({
	isLoading: false,
	view: "small",
})

const ArticlePageSlice = createSlice({
	name: "ArticlePage",
	reducers: {
		setSmallView(state) {
			state.view = "small"
		},
		setBigView(state) {
			state.view = "big"
		},
	},
	initialState,
	extraReducers(builder) {
		builder.addCase(getArticles.fulfilled, (state, payload) => {
			articleAdapter.setMany(state, payload)
		})
	},
})

export const ArticlePageReducer = ArticlePageSlice.reducer
export const { setBigView, setSmallView } = ArticlePageSlice.actions
export const articlesSelectors = articleAdapter.getSelectors<StoreSchema>(
	(state) => state.ArticlesPageReducer || articleAdapter.getInitialState()
)
