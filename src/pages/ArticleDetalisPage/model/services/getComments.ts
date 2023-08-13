import {createAsyncThunk} from "@reduxjs/toolkit"
import {$api} from "shared/api/api"

export const getComments = createAsyncThunk<void, void, {extra:{api:typeof $api}, rejectValue:string}>
("ArticleDetalisComments", async (params, {rejectWithValue, extra}) => {
	const {api} = extra
	try {
		const data = (await api.get("comments/1")).data
	} catch (e) {
		return rejectWithValue("error")
	}
})
