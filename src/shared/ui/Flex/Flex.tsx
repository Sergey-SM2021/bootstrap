import { PropsWithChildren } from "react"
import clx from "./Flex.module.scss"
import { classNames } from "shared/lib/helpers/classNames/classNames"

interface FlexProps extends PropsWithChildren {
  gap?: 0 | 4 | 8 | 16 | 32 | 64;
  direction?: "row" | "column" | "row-reverse";
  className?: string;
  justify?: "center" | "space-around" | "end" | "start" | "space-between";
  align?: "center" | "start" | "end";
  full?: boolean;
  onClick?: VoidFunction;
}

const FlexGap = {
	0: clx.gap0,
	4: clx.gap4,
	8: clx.gap8,
	16: clx.gap16,
	32: clx.gap32,
	64: clx.gap64,
}

const FlexDirection = {
	row: clx.row,
	column: clx.column,
	"row-reverse": clx["row-reverse"],
}

const FlexAlign = {
	center: clx["align-center"],
	start: clx["align-start"],
	end: clx["align-end"],
}

const FlexJustify = {
	center: clx["justify-center"],
	"space-around": clx["justify-space-around"],
	"space-between": clx["justify-space-between"],
	start: clx["justify-start"],
	end: clx["justify-end"],
}

export const Flex = (props: FlexProps) => {
	const {
		gap = 0,
		direction = "row",
		align = "start",
		className = "",
		justify = "start",
		children,
		full = true,
		...rest
	} = props

	return (
		<div
			className={classNames(clx.flex, { [clx.full]: full }, [
				className,
				FlexDirection[direction],
				FlexAlign[align],
				FlexGap[gap],
				FlexJustify[justify],
			])}
			{...rest}
		>
			{children}
		</div>
	)
}
