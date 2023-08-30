import { PropsWithChildren, memo } from "react"
import clx from "./Label.module.scss"

interface LabelProps extends PropsWithChildren {
  onClick?: VoidFunction;
}

export const Label = memo((props: LabelProps) => {
	const { children, onClick } = props
	return (
		<div onClick={onClick} className={clx.Label}>
			{children}
		</div>
	)
})
