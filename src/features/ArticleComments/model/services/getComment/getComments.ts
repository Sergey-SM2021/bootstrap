import { $api } from "shared/api/api"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Comment } from "entity/Comment/model/types/Comment"

export const getComments = createAsyncThunk<
  Comment[],
  number,
  { extra: { api: typeof $api }, rejectValue: string }
>("comments/get comments", async (id, { extra, rejectWithValue }) => {
	try {
		return (await extra.api.get(`comment/${id}`)).data        
	} catch (error) {
		return rejectWithValue("Error")
	}
})
