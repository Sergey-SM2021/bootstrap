import { $api } from "shared/api/api"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Article } from "entity/Article/model/types/Article"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import {
	getSearch,
	getSortBy,
	getStrategy,
	getTegs,
} from "../selectors/selectors"
import { incrementPage } from "../slice/Filters"

interface Params {
  page: number;
  reset: boolean;
}

export const getArticles = createAsyncThunk<
  Article[],
  Params,
  { extra: { api: typeof $api }; state: StoreSchema }
>("ArticlePage/getArticles", async ({ page, reset }, thunkAPI) => {
	const { extra, dispatch, rejectWithValue, getState } = thunkAPI

	const search = getSearch(getState())
	const sortBy = getSortBy(getState())
	const strategy = getStrategy(getState())
	const tegs = getTegs(getState())

	try {
		const responce = (
			await extra.api.get(`article?page=${page}&limit=3&search=${search}`)
		).data
		dispatch(incrementPage())
		return responce
	} catch (error) {
		return rejectWithValue(error)
	}
})
