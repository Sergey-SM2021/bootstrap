import {
	PayloadAction,
	createEntityAdapter,
	createSlice,
} from "@reduxjs/toolkit"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { Comment } from "entity/Comment/model/types/Comment"
import { getComments } from "../services/getComments"
import { ArticleDetalisCommentsSchema } from "../types/ArticleDetalisPage"
import { CreateCommentAsync } from "features/createComment"

export const commentsAdapter = createEntityAdapter<Comment>()

export const commentsSelectors = commentsAdapter.getSelectors<StoreSchema>(
	(state) => state.comments || commentsAdapter.getInitialState()
)

const initialState: ArticleDetalisCommentsSchema =
  commentsAdapter.getInitialState({ isLoading: false })

const Comments = createSlice({
	name: "comments",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(
			getComments.fulfilled,
			(state, action: PayloadAction<Comment[]>) => {
				commentsAdapter.setMany(state, action.payload)
				state.isLoading = false
			}
		)
		builder.addCase(getComments.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(getComments.rejected, (state, action) => {
			state.isLoading = false
			state.Error = action.payload
		})
		builder.addCase(
			CreateCommentAsync.fulfilled,
			(state, action: PayloadAction<Comment>) => {
				commentsAdapter.addOne(state, action.payload)
			}
		)
	},
})

export const { reducer, actions } = Comments
