import { DeepPartial, configureStore } from "@reduxjs/toolkit"
import { StoreSchema } from "./StoreSchema"
import { counterSliceReducer } from "entity/counter/model/slice/counterSlice"
import { loginSliceReducer } from "features/login"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { userSliceReducer } from "entity/user"

export const createStore = (preloadedState?: DeepPartial<StoreSchema>) => configureStore<StoreSchema>({
	reducer: {
		counter:counterSliceReducer,
		login: loginSliceReducer,
		user: userSliceReducer
	},
	preloadedState: preloadedState as StoreSchema,
	devTools: __IS_DEV__
})

const store = createStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
