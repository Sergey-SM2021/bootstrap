import { createAsyncThunk } from "@reduxjs/toolkit"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { $api } from "shared/api/api"
import { CommentType } from "entity/Comment"

export const CreateCommentAsync = createAsyncThunk<
CommentType,
  string,
  { extra: { api: typeof $api }; state: StoreSchema }
>("Create comment slice", async (text, { extra: { api }, getState, rejectWithValue }) => {
	try {
		return (await api.post("comment", {
			articleId: getState().ArticleReducer?.data?.id,
			text,
		})).data
	} catch (error) {
		return rejectWithValue("error")
	}
})
