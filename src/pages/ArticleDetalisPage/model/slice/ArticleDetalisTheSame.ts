import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { ArticleDetalisPageTheSameSchema } from "../types/ArticleDetalisTheSameSchema"
import { Article } from "entity/Article/model/types/Article"
import { getTheSameArticles } from "../services/getTheSameArticles"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

export const TheSameAdapter = createEntityAdapter<Article>()

const initialState: ArticleDetalisPageTheSameSchema =
  TheSameAdapter.getInitialState({
  	isLoading: false,
  })

const ArticleDetalisTheSame = createSlice({
	initialState,
	name: "ArticleDetalisTheSame",
	reducers: {
		setTheSame: TheSameAdapter.setMany,
	},
	extraReducers(builder) {
		builder.addCase(getTheSameArticles.fulfilled, (state, payload) => {
			TheSameAdapter.setMany(state, payload.payload)
		})
	},
})

export const ArticleDetalisTheSameReducer = ArticleDetalisTheSame.reducer
export const { setTheSame } = ArticleDetalisTheSame.actions
export const theSameSelectors = TheSameAdapter.getSelectors<StoreSchema>(
	(state) => state.comments?.same || TheSameAdapter.getInitialState()
)
