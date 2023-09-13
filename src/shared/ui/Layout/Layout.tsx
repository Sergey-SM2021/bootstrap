import { PropsWithChildren, useEffect, useRef } from "react"
import clx from "./Layout.module.scss"
import { TestProps } from "app/types/TestProps"

type LayoutProps = TestProps & PropsWithChildren;

export const Layout = ({ children, DataTestid }: LayoutProps) => {
	const pageWrapper = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (pageWrapper.current instanceof HTMLDivElement) {
			pageWrapper.current.scrollTop = 190
		}
	}, [])

	return (
		<div className={clx.page} ref={pageWrapper} data-testid={DataTestid}>
			{children}
		</div>
	)
}
