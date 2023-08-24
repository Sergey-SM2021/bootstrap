import { $api } from "shared/api/api"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Article } from "entity/Article/model/types/Article"

export const getArticles = createAsyncThunk<
  Article[],
  void,
  { extra: { api: typeof $api } }
>("ArticlePage/getArticles", async (params, thunkAPI) => {
	const { extra } = thunkAPI
	return (await extra.api.get("article")).data
})
