import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { Article } from "entity/Article/model/types/Article"
import { getArticles } from "../services/getArticles"
import { ArticlePageSchema } from "../types/articleSchema"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

const articleAdapter = createEntityAdapter<Article>()

const initialState: ArticlePageSchema = articleAdapter.getInitialState({
	isLoading: false,
	view: "big",
	page: 1,
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
		incrementPage(state) {
			state.page += 1
		},
	},
	initialState,
	extraReducers(builder) {
		builder.addCase(getArticles.fulfilled, (state, payload) => {
			articleAdapter.addMany(state, payload)
		})
	},
})

export const ArticlePageReducer = ArticlePageSlice.reducer
export const { setBigView, incrementPage, setSmallView } =
  ArticlePageSlice.actions
export const articlesSelectors = articleAdapter.getSelectors<StoreSchema>(
	(state) => state.ArticlesPageReducer || articleAdapter.getInitialState()
)
