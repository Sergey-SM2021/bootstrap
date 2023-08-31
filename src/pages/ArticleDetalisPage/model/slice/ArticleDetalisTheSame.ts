import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { ArticleDetalisPageTheSame } from "../types/ArticleDetalisTheSameSchema"
import { Article } from "entity/Article/model/types/Article"

export const TheSameAdapter = createEntityAdapter<Article>()

const initialState:ArticleDetalisPageTheSame = TheSameAdapter.getInitialState({
	isLoading: false
})

const ArticleDetalisTheSame = createSlice({
	initialState,
	name: "ArticleDetalisTheSame",
	reducers: {
		setTheSame: TheSameAdapter.setMany
	},
})

export const {reducer} = ArticleDetalisTheSame 
export const {setTheSame} = ArticleDetalisTheSame.actions 
export const selectors = TheSameAdapter.getSelectors()