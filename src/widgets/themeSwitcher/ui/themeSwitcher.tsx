import { useTheme } from "app/providers/ThemeProvider/lib/useTheme"
import Light from "../assets/light.svg"
import Dark from "../assets/dark.svg"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"
import { memo } from "react"

export const ThemeSwitcher = memo(() => {
	const { theme, toggleThemeHamdler } = useTheme()
	return (
		<AppButton theme={AppButtonTheme.clear} onClick={toggleThemeHamdler}>
			{theme === Theme.lightTheme ? <Dark /> : <Light />}
		</AppButton>
	)
})

ThemeSwitcher.displayName = "ThemeSwitcher"