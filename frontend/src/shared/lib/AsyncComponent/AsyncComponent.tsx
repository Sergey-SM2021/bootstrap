import { Reducer } from "@reduxjs/toolkit"
import { FC, PropsWithChildren, useEffect } from "react"
import { useStore } from "react-redux"

interface AsyncComponentProps extends PropsWithChildren {
  reducerName: string;
  reducer: Reducer;
}

export const AsyncComponent: FC<AsyncComponentProps> = ({
	children,
	reducer,
	reducerName,
}) => {
	const store = useStore()

	useEffect(() => {
		// @ts-ignore
		store.injectReducer(reducerName, reducer)
		// eslint-disable-next-line
  }, []);

	return <>{children}</>
}
