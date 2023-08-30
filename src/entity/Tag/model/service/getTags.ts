import { $api } from "shared/api/api"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Tag } from "entity/Tag"

export const getTags = createAsyncThunk<
  Tag[],
  void,
  { extra: { api: typeof $api } }
>("filter/getTags", async (params, { extra, rejectWithValue }) => {
	try {
		return (await extra.api.get("tag")).data
	} catch (error) {
		return rejectWithValue(error)
	}
})
