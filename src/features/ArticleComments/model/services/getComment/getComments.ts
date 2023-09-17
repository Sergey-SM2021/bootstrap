import { $api } from "shared/api/api"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { CommentType } from "entity/Comment"

export const getComments = createAsyncThunk<
  CommentType[],
  number,
  { extra: { api: typeof $api }; rejectValue: string }
>("comments/get comments", async (id, { extra, rejectWithValue }) => {
	try {
		return (await extra.api.get(`comment/${id}`)).data
	} catch (error) {
		return rejectWithValue("Error")
	}
})
