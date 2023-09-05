import { PropsWithChildren, memo } from "react"
import clx from "./icon.module.scss"
import { classNames } from "shared/lib/helpers/classNames/classNames"

interface IconProps extends PropsWithChildren {
  size?: "md" | "xs";
  className?: string;
}

export const Icon = memo((props: IconProps) => {
	const { size = "xs", children, className = "" } = props
	return (
		<div className={classNames(clx.Icon, {}, [clx[size], className])}>
			{children}
		</div>
	)
})
