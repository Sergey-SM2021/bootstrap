import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { StoreSchema } from "./StoreSchema"
import { counterSliceReducer } from "entity/counter/model/slice/counterSlice"
import { userSliceReducer } from "entity/user"
import { $api } from "shared/api/api"
import { SaveScrollReducer } from "features/SaveScroll"

const staticReducers = {
	counter: counterSliceReducer,
	user: userSliceReducer,
	scroll: SaveScrollReducer
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
			counter: counterSliceReducer,
			user: userSliceReducer,
			scroll: SaveScrollReducer
		},
		preloadedState: preloadedState as StoreSchema,
		devTools: __IS_DEV__,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({ thunk: { extraArgument: { api: $api } } }),
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
