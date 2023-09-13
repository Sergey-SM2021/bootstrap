import {
	PayloadAction,
	createEntityAdapter,
	createSlice,
} from "@reduxjs/toolkit"
import { getArticles } from "../services/getArticles"
import {
	ArticlePageSchema,
	SortBy,
	StrategyType,
} from "../types/articleSchema"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { Article } from "entity/ArticleDetalis/model/types/Article"

const articleAdapter = createEntityAdapter<Article>()

const initialState: ArticlePageSchema = {
	isLoading: false,
	view: "big",
	articles: articleAdapter.getInitialState(),
	page: 1,
}

const ArticlePageSlice = createSlice({
	name: "ArticlePage",
	reducers: {
		setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload
		},
		setSortBy(state, action: PayloadAction<SortBy>) {
			state.sortBy = action.payload
		},
		setStrategy(state, action: PayloadAction<StrategyType>) {
			state.strategy = action.payload
		},
		incrementPage(state) {
			state.page += 1
		},
		setTag(state, payload: PayloadAction<number>) {
			if (state.tags) {
				state.tags = [...state.tags, payload.payload]
			} else {
				state.tags = [payload.payload]
			}
		},
		removeTag(state, payload: PayloadAction<number>) {
			state.tags = state.tags?.filter((el) => el !== payload.payload)
		},
		toggleView(state) {
			if (state.view === "big") {
				state.view = "small"
			} else {
				state.view = "big"
			}
		},
	},
	initialState,
	extraReducers(builder) {
		builder
			.addCase(getArticles.fulfilled, (state, payload) => {
				state.isLoading = false
				if (payload.meta.arg.reset) {
					if (payload.payload.articles) {
						articleAdapter.setAll(state.articles, payload.payload.articles)
					}
				} else {
					if (payload.payload.articles) {
						articleAdapter.addMany(state.articles, payload.payload.articles)
					}
				}
			})
			.addCase(getArticles.rejected, (state) => {
				state.isLoading = false
			})
			.addCase(getArticles.pending, (state) => {
				state.isLoading = true
			})
	},
})

export const ArticlePageReducer = ArticlePageSlice.reducer
export const {
	incrementPage,
	removeTag,
	setSearch,
	setSortBy,
	setStrategy,
	setTag,
	toggleView,
} = ArticlePageSlice.actions

export const articlesSelectors = articleAdapter.getSelectors<StoreSchema>(
	(state) =>
		state.ArticlesPageReducer?.articles || articleAdapter.getInitialState()
)
