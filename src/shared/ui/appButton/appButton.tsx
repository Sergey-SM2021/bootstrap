import { classNames } from "shared/lib/helpers/classNames/classNames"
import clx from "./appButton.module.scss"
import { ButtonHTMLAttributes } from "react"

export enum AppButtonTheme {
  clear = "clear",
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: AppButtonTheme;
}

export const AppButton = (props: AppButtonProps) => {
	const { children, theme, ...restProps } = props
	return (
		<button
			className={classNames(clx.appButton, {}, [clx[theme]])}
			{...restProps}
		>
			{children}
		</button>
	)
}
