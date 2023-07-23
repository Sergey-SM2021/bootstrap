import { Provider } from "react-redux"
import { PropsWithChildren } from "react"
import { DeepPartial } from "@reduxjs/toolkit"
import { StoreSchema } from "../config/StoreSchema"
import { createStore } from "../config/store"

interface ReduxProviderProps extends PropsWithChildren {
    initialStore?:DeepPartial<StoreSchema>
}

export const ReduxProvider = ({children, initialStore }:ReduxProviderProps) => 
	<Provider store={createStore(initialStore)}>
		{children}
	</Provider>