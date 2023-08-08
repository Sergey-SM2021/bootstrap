import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import { $api } from "shared/api/api"
import { Article } from "../../types/Article"

export const getArticle = createAsyncThunk<
  Article,
  number,
  { extra: { api: typeof $api }, rejectValue: string }
>("article/getArticle", async (id, { extra }) => {
	const { api } = extra
	try {
		return (await api.get(`/articles/${id}`)).data
	} catch (error) {
		return isRejectedWithValue("error")
	}
})
