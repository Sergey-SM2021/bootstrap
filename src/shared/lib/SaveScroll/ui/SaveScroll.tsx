import { PropsWithChildren, useEffect } from "react"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { setScrollPosition } from "../model/slice/SaveScroll"

type SaveScrollProps = PropsWithChildren;

export const SaveScroll = ({ children }: SaveScrollProps) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		return () => {
			dispatch(setScrollPosition({ path: "/", top: 89 }))
		}
	}, [dispatch])

	return <div>{children}</div>
}
