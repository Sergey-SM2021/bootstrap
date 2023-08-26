import { PropsWithChildren, useEffect, useRef } from "react"
import clx from "./Layout.module.scss"

type LayoutProps = PropsWithChildren;

export const Layout = ({ children }: LayoutProps) => {
	const pageWrapper = useRef<HTMLDivElement>(null)
	
	useEffect(() => {
		if (pageWrapper.current instanceof HTMLDivElement) {
			pageWrapper.current.scrollTop = 190
		}
	}, [])

	return (
		<div className={clx.page} ref={pageWrapper}>
			{children}
		</div>
	)
}
