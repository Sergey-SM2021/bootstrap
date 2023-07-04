import { classNames } from "shared/lib/helpers/classNames/classNames"
import clx from "./appButton.module.scss"
import { ButtonHTMLAttributes } from "react"

export enum AppButtonTheme {
  clear = "clear",
  primary = "primary",
  background_inverted = "background_inverted"
}

export enum AppButtonSize {
  md = "SIZE_MD",
  lg = "SIZE_LG",
  xl = "SIZE_XL"
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: AppButtonTheme;
  square?: boolean;
  size?: AppButtonSize;
}

export const AppButton = (props: AppButtonProps) => {
	const {
		children,
		size = AppButtonSize.md,
		theme,
		square = false,
		className,
		...restProps
	} = props
	return (
		<button
			className={classNames(clx.appButton, { [clx.square]: square }, [
				clx[theme],
				className,
				clx[size],
			])}
			{...restProps}
		>
			{children}
		</button>
	)
}
