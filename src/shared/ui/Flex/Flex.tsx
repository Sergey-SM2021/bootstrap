import { PropsWithChildren } from "react"
import style from "./Flex.module.scss"
import { classNames } from "shared/lib/helpers/classNames/classNames"

interface FlexProps extends PropsWithChildren {
  gap: number;
  direction: "row" | "column";
  className?: string;
}

export const Flex = (props: FlexProps) => {
	const { direction, gap, className = "", children } = props
	return (
		<div
			className={classNames(style.Flex, {}, [className])}
			style={{ flexDirection: direction, gap }}
		>
			{children}
		</div>
	)
}
