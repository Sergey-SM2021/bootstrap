import {createEntityAdapter, createSlice} from "@reduxjs/toolkit"
import { Comment } from "entity/Comment/model/types/Comment"
import {ArticleDetalisPageSchema} from "../types/ArticleDetalisPage"
import {StoreSchema} from "app/providers/ReduxProvider/config/StoreSchema"

const commentsAdapter = createEntityAdapter<Comment>()

const initialState:ArticleDetalisPageSchema = {
	...commentsAdapter.getInitialState(),
	isLoading: false
}

const slice = createSlice({
	name:"ArticleDetalisComments",
	reducers:{
		setComments:commentsAdapter.setOne
	},
	initialState,
})

export const selectors = commentsAdapter.getSelectors((state:StoreSchema) => state.ArticleDetalisPage || commentsAdapter.getInitialState())
export const {setComments} = slice.actions
export const {reducer} = slice
