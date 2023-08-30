import { PropsWithChildren, memo } from "react"
import clx from "./Label.module.scss"
import { classNames } from "../../lib/helpers/classNames/classNames"

interface LabelProps extends PropsWithChildren {
  onClick?: VoidFunction;
  isActive?: boolean;
}

export const Label = memo((props: LabelProps) => {
	const { children, onClick, isActive } = props
	return (
		<div
			onClick={onClick}
			className={classNames(clx.Label, { [clx.Active]: Boolean(isActive) })}
		>
			{children}
		</div>
	)
})
