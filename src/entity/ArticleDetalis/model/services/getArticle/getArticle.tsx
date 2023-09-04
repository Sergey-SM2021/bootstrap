import { createAsyncThunk } from "@reduxjs/toolkit"
import { $api } from "shared/api/api"
import { Article } from "../../types/Article"

export const getArticle = createAsyncThunk<
  Article,
  number,
  { extra: { api: typeof $api }, rejectValue: string }
>("article/getArticle", async (id, { extra , rejectWithValue}) => {
	try {
		const { api } = extra
		const data = (await api.get(`/articles/${id}`)).data
		return data
	} catch (error) {
		return rejectWithValue("error")
	}
})
