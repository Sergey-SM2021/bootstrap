import { classNames } from "shared/lib/helpers/classNames/classNames"
import clx from "./appButton.module.scss"
import { ButtonHTMLAttributes, memo } from "react"

export enum AppButtonTheme {
  clear = "clear",
  primary = "primary",
  background_inverted = "background_inverted",
  dangerous = "dangerous",
}

export enum AppButtonSize {
  md = "SIZE_MD",
  lg = "SIZE_LG",
  xl = "SIZE_XL",
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: AppButtonTheme;
  square?: boolean;
  size?: AppButtonSize;
}

export const AppButton = memo((props: AppButtonProps) => {
	const {
		children,
		size = AppButtonSize.md,
		theme,
		square = false,
		className = "",
		disabled = false,
		...restProps
	} = props
	return (
		<button
			disabled={disabled}
			className={classNames(
				clx.appButton,
				{ [clx.square]: square, [clx.disabled]: disabled },
				[clx[theme], className, clx[size]]
			)}
			{...restProps}
		>
			{children}
		</button>
	)
})

AppButton.displayName = "AppButton"