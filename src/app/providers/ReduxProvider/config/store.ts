import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { StoreSchema } from "./StoreSchema"
import { userSliceReducer } from "entity/user"
import { $api } from "shared/api/api"
import { SaveScrollReducer } from "features/SaveScroll"
import { TagSliceReducer } from "entity/Tag"
import { rtkApi } from "shared/api/rtk"

const staticReducers = {
	user: userSliceReducer,
	scroll: SaveScrollReducer,
	tags: TagSliceReducer,
	[rtkApi.reducerPath]: rtkApi.reducer,
}

// @ts-ignore
function createReducer(asyncReducers) {
	return combineReducers({
		...staticReducers,
		...asyncReducers,
	})
}

export const createStore = (preloadedState?: DeepPartial<StoreSchema>) => {
	const store = configureStore({
		reducer: {
			user: userSliceReducer,
			scroll: SaveScrollReducer,
			tags: TagSliceReducer,
			[rtkApi.reducerPath]: rtkApi.reducer,
		},
		preloadedState: preloadedState as StoreSchema,
		devTools: __IS_DEV__,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({ thunk: { extraArgument: { api: $api } } }).concat(
				rtkApi.middleware
			),
	})

	// @ts-ignore
	store.asyncReducers = {}

	// @ts-ignore
	store.injectReducer = (key: string, asyncReducer) => {
		// @ts-ignore
		store.asyncReducers[key] = asyncReducer
		// @ts-ignore
		store.replaceReducer(createReducer(store.asyncReducers))
	}

	return store
}

export type RootState = ReturnType<typeof createStore>["getState"];
export type AppDispatch = ReturnType<typeof createStore>["dispatch"];
