import { useTheme } from "app/providers/ThemeProvider/lib/useTheme"
import Light from "../assets/light.svg"
import Dark from "../assets/dark.svg"
import Custom from "../assets/custom.svg"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"
import { memo } from "react"
import clx from "./themeSwitcher.module.scss"

interface ThemeIcon {
  theme: Theme;
}

const ThemeIcon = ({ theme }: ThemeIcon) => {
	switch (theme) {
	case Theme.CustomTheme:
		return <Custom />
	case Theme.darkTheme:
		return <Dark />
	default:
		return <Light />
	}
}

export const ThemeSwitcher = memo(() => {
	const { theme, toggleThemeHamdler } = useTheme()
	return (
		<AppButton
			className={clx.themeSwitcher}
			theme={AppButtonTheme.clear}
			onClick={toggleThemeHamdler}
		>
			<ThemeIcon theme={theme}/>
		</AppButton>
	)
})

ThemeSwitcher.displayName = "ThemeSwitcher"
