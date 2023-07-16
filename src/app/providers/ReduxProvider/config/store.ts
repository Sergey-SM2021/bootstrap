import { DeepPartial, configureStore } from "@reduxjs/toolkit"
import { StoreSchema } from "./StoreSchema"
import { counterSliceReducer } from "entity/counter/model/slice/counterSlice"

export const createStore = (preloadedState?: DeepPartial<StoreSchema>) => configureStore<StoreSchema>({
	reducer: {
		counter:counterSliceReducer
	},
	preloadedState: preloadedState as StoreSchema,
	devTools: __IS_DEV__
})