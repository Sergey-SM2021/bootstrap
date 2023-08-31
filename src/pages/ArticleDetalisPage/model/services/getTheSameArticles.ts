import { $api } from "shared/api/api"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Article } from "entity/Article/model/types/Article"

export const getTheSameArticles = createAsyncThunk<
  Article[],
  void,
  { extra: { api: typeof $api } }
>(
	"ArticleDetalisTheSame/getTheSameArticles",
	async (params, { extra: { api }, rejectWithValue }) => {
		try {
			return (await api.get("articles/theSame/8")).data
		} catch (error) {
			return rejectWithValue("error")
		}
	}
)
