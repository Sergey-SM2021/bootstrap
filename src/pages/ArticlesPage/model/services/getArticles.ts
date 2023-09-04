import { $api } from "shared/api/api"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Article } from "entity/Article/model/types/Article"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { getSearch, getSortBy, getStrategy, getTags } from "../selectors/ArticlePageSelectors"
import { incrementPage } from "../slice/ArticlePage"

interface Params {
  page: number;
  reset: boolean;
}

interface getArticlesRes {
  articles: Array<Article>;
  hasMore: boolean;
}

export const getArticles = createAsyncThunk<
  getArticlesRes,
  Params,
  { extra: { api: typeof $api }; state: StoreSchema }
>("ArticlePage/getArticles", async ({ page }, thunkAPI) => {
	const { extra, dispatch, rejectWithValue, getState } = thunkAPI

	const search = getSearch(getState())
	const sortBy = getSortBy(getState())
	const strategy = getStrategy(getState())
	const tags = getTags(getState()).join(",")

	const path = `articles?search=${search}&sortBy=${sortBy}&strategy=${strategy}&tags=${tags}`

	window.history.pushState(undefined, "", path)

	try {
		const responce = (await extra.api.get(`${path}&page=${page}&limit=10`)).data
		dispatch(incrementPage())
		return responce
	} catch (error) {
		return rejectWithValue(error)
	}
})
