import { RootState } from "app/providers/ReduxProvider"
import { TypedUseSelectorHook, useSelector } from "react-redux"

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
