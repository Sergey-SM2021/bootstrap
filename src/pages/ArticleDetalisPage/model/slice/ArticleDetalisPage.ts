import { combineReducers } from "@reduxjs/toolkit"
import { reducer as comments } from "./ArticleDetalisComments"
import { ArticleDetalisTheSameReducer } from "./ArticleDetalisTheSame"

export const ArticleDetalisPage = combineReducers({
	comments,
	same: ArticleDetalisTheSameReducer,
})
