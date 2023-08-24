import { PropsWithChildren } from "react"
import style from "./Flex.module.scss"
import { classNames } from "shared/lib/helpers/classNames/classNames"

interface FlexProps extends PropsWithChildren {
  gap?: number;
  direction?: "row" | "column";
  className?: string;
  justify?: "space-between" | "center" | "space-around" | "flex-end";
  align?: "center";
  onClick?: VoidFunction;
}

export const Flex = (props: FlexProps) => {
	const {
		direction,
		align,
		gap,
		className = "",
		children,
		justify,
		onClick,
	} = props

	return (
		<div
			onClick={onClick}
			className={classNames(style.Flex, {}, [className])}
			style={{
				flexDirection: direction,
				gap,
				justifyContent: justify,
				alignItems: align,
			}}
		>
			{children}
		</div>
	)
}
