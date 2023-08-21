import { createAsyncThunk } from "@reduxjs/toolkit"
import { $api } from "shared/api/api"

export const CreateCommentAsync = createAsyncThunk<
  void,
  string,
  { extra: { api: typeof $api } }
>("Create comment slice", async (text, { extra: { api } }) => {
	api.post("comment", {
		articleId: 1,
		text
	})
})
