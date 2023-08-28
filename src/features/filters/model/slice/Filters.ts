import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { FilterSchema, SortBy, StrategyType } from "../types/FiltersSchema"
import { getArticles } from "../services/getArticles"

const initialState: FilterSchema = {
	search: "",
	page: 1,
	sortBy: SortBy.Date,
	strategy: StrategyType.asc,
	tegs: ["It", "Авиация", "Гонки"],
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
		builder.addCase(getArticles.fulfilled, (state, action) => {
			if (action.meta.arg.reset) {
				state.page = 1
			}
		})
	},
})

export const FilterReducer = Filter.reducer
export const { setSearch, setSortBy, setStrategy, incrementPage } =
  Filter.actions
