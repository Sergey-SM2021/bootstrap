import {
	PayloadAction,
	createEntityAdapter,
	createSlice,
} from "@reduxjs/toolkit"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { CommentType } from "entity/Comment"
import { getComments } from "../services/getComment/getComments"
import { CreateCommentAsync } from "../services/createComment/createComment"
import { ArticleCommentsSchema } from "../types/ArticleCommentsSchema"

export const commentsAdapter = createEntityAdapter<CommentType>()

const initialState: ArticleCommentsSchema = {
	isLoading: false,
	comments: commentsAdapter.getInitialState(),
}

const Comments = createSlice({
	name: "comments",
	initialState,
	reducers: {
		setCommentText(state, payload: PayloadAction<string>) {
			state.newCommentText = payload.payload
		},
	},
	extraReducers(builder) {
		builder.addCase(
			getComments.fulfilled,
			(state, action: PayloadAction<CommentType[]>) => {
				commentsAdapter.removeAll(state.comments)
				commentsAdapter.setMany(state.comments, action.payload)
				state.isLoading = false
			}
		)
		builder.addCase(getComments.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(getComments.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.payload
		})
		builder.addCase(
			CreateCommentAsync.fulfilled,
			(state, action: PayloadAction<CommentType>) => {
				commentsAdapter.addOne(state.comments, action.payload)
			}
		)
	},
})

export const commentsSelectors = commentsAdapter.getSelectors<StoreSchema>(
	(state) =>
		state.articleComments?.comments ?? commentsAdapter.getInitialState()
)

export const {
	reducer,
	actions: { setCommentText },
} = Comments
