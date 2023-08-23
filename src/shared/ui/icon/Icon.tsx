import { PropsWithChildren, memo } from "react"
import clx from "./icon.module.scss"
import {classNames} from "shared/lib/helpers/classNames/classNames"

interface IconProps extends PropsWithChildren {
  size: "md" | "xs";
}

export const Icon = memo((props: IconProps) => {
	const { size = "md", children } = props
	return <div className={classNames(clx.Icon, {}, [clx[size]])}>{children}</div>
})
