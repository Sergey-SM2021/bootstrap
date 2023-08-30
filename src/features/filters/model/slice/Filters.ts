import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { FilterSchema, SortBy, StrategyType } from "../types/FiltersSchema"
import { getArticles } from "../services/getArticles"

const initialState: FilterSchema = {
	search: "",
	hasMore: true,
	page: 1,
	sortBy: SortBy.Date,
	strategy: StrategyType.asc,
}

const Filter = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload
		},
		setSortBy(state, action: PayloadAction<SortBy>) {
			state.sortBy = action.payload
		},
		setStrategy(state, action: PayloadAction<StrategyType>) {
			state.strategy = action.payload
		},
		incrementPage(state) {
			state.page += 1
		},
		setTag(state, payload: PayloadAction<number>) {
			if (state.tags) {
				state.tags = [...state.tags, payload.payload]
			} else {
				state.tags = [payload.payload]
			}
		},
		removeTag(state, payload: PayloadAction<number>) {
			state.tags = state.tags?.filter((el) => el !== payload.payload)
		},
	},
	extraReducers(builder) {
		builder.addCase(getArticles.fulfilled, (state, action) => {
			if (action.meta.arg.reset) {
				state.page = 1
			}
			state.hasMore = action.payload.hasMore
		})
	},
})

export const FilterReducer = Filter.reducer
export const {
	setSearch,
	setSortBy,
	setTag,
	removeTag,
	setStrategy,
	incrementPage,
} = Filter.actions
