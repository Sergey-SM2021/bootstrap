import { $api } from "shared/api/api"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Comment } from "entity/Comment/model/types/Comment"

export const getComments = createAsyncThunk<
  Comment[],
  void,
  { extra: { api: typeof $api }, rejectValue: string }
>("comments/get comments", async (params, { extra, rejectWithValue }) => {
	try {
		return (await extra.api.get("comment/1")).data        
	} catch (error) {
		return rejectWithValue("Error")
	}
})
