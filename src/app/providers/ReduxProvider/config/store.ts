import { DeepPartial, combineReducers, configureStore } from "@reduxjs/toolkit"
import { StoreSchema } from "./StoreSchema"
import { counterSliceReducer } from "entity/counter/model/slice/counterSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { userSliceReducer } from "entity/user"

const staticReducers = {
	counter: counterSliceReducer,
	user: userSliceReducer,
}

// @ts-ignore
function createReducer(asyncReducers) {
	return combineReducers({
		...staticReducers,
		...asyncReducers,
	})
}

export const createStore = (preloadedState?: DeepPartial<StoreSchema>) => {
	const store = configureStore<StoreSchema>({
		reducer: {
			counter: counterSliceReducer,
			user: userSliceReducer,
		},
		preloadedState: preloadedState as StoreSchema,
		devTools: __IS_DEV__,
	})

	// @ts-ignore
	store.asyncReducers = {}

	// @ts-ignore
	store.injectReducer = (key:string, asyncReducer) => {
		// @ts-ignore
		store.asyncReducers[key] = asyncReducer
		// @ts-ignore
		store.replaceReducer(createReducer(store.asyncReducers))
	}

	return store
}

const reduxStore = createStore()

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
