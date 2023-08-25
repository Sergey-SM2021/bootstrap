import { $api } from "shared/api/api"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Article } from "entity/Article/model/types/Article"
import { incrementPage } from "../slice/ArticlePage"

export const getArticles = createAsyncThunk<
  Article[],
  number,
  { extra: { api: typeof $api } }
>("ArticlePage/getArticles", async (page, thunkAPI) => {
	const { extra, dispatch, rejectWithValue } = thunkAPI

	try {
		const responce = (await extra.api.get(`article?page=${page}&limit=3`)).data
		dispatch(incrementPage())
		return responce
	} catch (error) {
		return rejectWithValue(error)
	}
})
