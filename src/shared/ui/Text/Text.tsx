import { PropsWithChildren, memo } from "react"
import style from "./Text.module.scss"

export enum ThemeEnum {
	Error = "error",
	Primary = "primary"
}

interface TextProps extends PropsWithChildren {
	theme?: ThemeEnum
}

export const Text = memo(({children, theme = ThemeEnum.Primary}: TextProps) => (
	<div data-testid="Text" className={style[theme]}>
		{children}
	</div>
))

Text.displayName = "Text"