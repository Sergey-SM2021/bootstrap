import {
	PropsWithChildren,
	UIEvent,
	useEffect,
	useRef,
} from "react"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import clx from "./SaveScroll.module.scss"
import { useSelector } from "react-redux"
import { getScroll } from "../model/selectors/getScroll"
import { useLocation } from "react-router-dom"
import { setScrollPosition } from "../model/slice/SaveScroll"

type SaveScrollProps = PropsWithChildren;

export const SaveScroll = ({ children }: SaveScrollProps) => {
	const pageWrapper = useRef<HTMLDivElement>(null)
	const dispatch = useAppDispatch()
	const scroll = useSelector(getScroll)
	const loc = useLocation()

	useEffect(() => {
		if (pageWrapper.current instanceof HTMLDivElement) {
			pageWrapper.current.scrollTop = scroll[loc.pathname]
		}
		// eslint-disable-next-line
  }, []);

	const onScroll = (event: UIEvent<HTMLDivElement, globalThis.UIEvent>) => {
		dispatch(
			setScrollPosition({
				path: loc.pathname,
				top: event.currentTarget.scrollTop,
			})
		)
	}

	return (
		<div ref={pageWrapper} className={clx.SaveScroll} onScroll={onScroll}>
			{children}
		</div>
	)
}
