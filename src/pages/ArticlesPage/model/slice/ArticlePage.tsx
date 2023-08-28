import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { Article } from "entity/Article/model/types/Article"
import { getArticles } from "features/filters/model/services/getArticles"
import { ArticlePageSchema } from "../types/articleSchema"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

const articleAdapter = createEntityAdapter<Article>()

const initialState: ArticlePageSchema = {
	isLoading: false,
	view: "big",
	articles: articleAdapter.getInitialState(),
}

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
			if (payload.meta.arg.reset) {
				articleAdapter.setAll(state.articles, payload.payload.articles)
			} else {
				articleAdapter.addMany(state.articles, payload.payload.articles)
			}
		})
	},
})

export const ArticlePageReducer = ArticlePageSlice.reducer
export const { setBigView, setSmallView } = ArticlePageSlice.actions

export const articlesSelectors = articleAdapter.getSelectors<StoreSchema>(
	(state) =>
		state.ArticlesPageReducer?.articles || articleAdapter.getInitialState()
)
