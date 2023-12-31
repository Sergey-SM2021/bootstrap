import { createAsyncThunk } from "@reduxjs/toolkit"
import { setSearch, setSortBy, setStrategy, setTag } from "../slice/ArticlePage"
import { SortBy, StrategyType } from "../types/articleSchema"

export const InitSearchParams = createAsyncThunk<void, URLSearchParams>(
	"ArticlePage/InitSearchParams",
	async (params, { dispatch }) => {
		const search = params.get("search")
		const sortBy = params.get("sortBy")
		const strategy = params.get("strategy")
		const tags = params.get("tags")

		if (search) {
			dispatch(setSearch(search))
		}

		if (sortBy) {
			dispatch(setSortBy(sortBy as SortBy))
		}

		if (strategy) {
			dispatch(setStrategy(strategy as StrategyType))
		}

		if (tags) {
			tags.split(",").forEach((el) => {
				dispatch(setTag(Number(el)))
			})
		}
	}
)
