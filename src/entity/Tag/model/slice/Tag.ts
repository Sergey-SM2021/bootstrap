import { createSlice } from "@reduxjs/toolkit"
import { TagSchema } from "../type/TagSchema"
import { getTags } from "../service/getTags"

const initialState: TagSchema = {
	isLoading: false,
	tags: [],
}

const TagsSlice = createSlice({
	initialState,
	name: "tags",
	reducers: {
		setTags(state, payload) {
			state.tags = payload.payload
		},
	},
	extraReducers(builder) {
		builder.addCase(getTags.fulfilled, (state, payload) => {
			state.tags = payload.payload
		})
	},
})

export const TagSliceReducer = TagsSlice.reducer
export const { setTags } = TagsSlice.actions
