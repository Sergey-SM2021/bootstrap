import { PropsWithChildren, UIEvent, useEffect, useRef } from "react"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import clx from "./SaveScroll.module.scss"
import { useSelector } from "react-redux"
import { getScroll } from "../model/selectors/getScroll"
import { useLocation } from "react-router-dom"
import { setScrollPosition } from "../model/slice/SaveScroll"
import { useThrottle } from "shared/lib/hooks/useThrottle"

type SaveScrollProps = PropsWithChildren;

export const SaveScroll = ({ children }: SaveScrollProps) => {
	const pageWrapper = useRef<HTMLDivElement>(null)
	const dispatch = useAppDispatch()
	const scroll = useSelector(getScroll)
	const loc = useLocation()

	const onScroll = useThrottle(
		(event: UIEvent<HTMLDivElement, globalThis.UIEvent>) => {
			dispatch(
				setScrollPosition({
					path: loc.pathname,
					top: event.currentTarget.scrollTop,
				})
			)
		},
		500
	)

	useEffect(() => {
		if (pageWrapper.current instanceof HTMLDivElement) {
			pageWrapper.current.scrollTop = scroll[loc.pathname]
		}
		// eslint-disable-next-line
  }, []);

	return (
		<div ref={pageWrapper} className={clx.SaveScroll} onScroll={onScroll}>
			{children}
		</div>
	)
}
