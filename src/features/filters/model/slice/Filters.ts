import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { FilterSchema, SortBy, StrategyType } from "../types/FiltersSchema"
import { getArticles } from "../services/getArticles"
import { getTags } from "../../../../entity/Tag/model/service/getTags"

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
	},
	extraReducers(builder) {
		builder
			.addCase(getArticles.fulfilled, (state, action) => {
				if (action.meta.arg.reset) {
					state.page = 1
				}
				state.hasMore = action.payload.hasMore
			})
			.addCase(getTags.fulfilled, (state, payload) => {
				state.tags = payload.payload
			})
	},
})

export const FilterReducer = Filter.reducer
export const { setSearch, setSortBy, setStrategy, incrementPage } =
  Filter.actions
