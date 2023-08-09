import { PropsWithChildren, memo } from "react"
import style from "./Text.module.scss"
import { classNames } from "shared/lib/helpers/classNames/classNames"

export enum ThemeEnum {
  Error = "error",
  Primary = "primary",
}

export enum TextSize {
  sm = "text-sm",
  md = "text-md",
  lg = "text-lg",
  xl = "text-xl",
  xxl = "text-xxl",
}

interface TextProps extends PropsWithChildren {
  theme?: ThemeEnum;
  size?: TextSize;
  className?: string;
}

export const Text = memo((props: TextProps) => {
	const {
		children,
		className = "",
		theme = ThemeEnum.Primary,
		size = TextSize.md,
	} = props

	return (
		<div
			data-testid="Text"
			className={classNames(style[theme], {}, [style[size], className])}
		>
			{children}
		</div>
	)
})
