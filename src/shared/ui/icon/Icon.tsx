import { PropsWithChildren, memo } from "react"
import clx from "./icon.module.scss"

type IconProps = PropsWithChildren

export const Icon = memo(({children}:IconProps) => {
	return <div className={clx.Icon}>{children}</div>
})
