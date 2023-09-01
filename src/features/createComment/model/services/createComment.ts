import { createAsyncThunk } from "@reduxjs/toolkit"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { $api } from "shared/api/api"
import { Comment } from "entity/Comment/model/types/Comment"

export const CreateCommentAsync = createAsyncThunk<
  Comment,
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
