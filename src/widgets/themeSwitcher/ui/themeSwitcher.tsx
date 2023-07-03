import { useTheme } from "app/providers/ThemeProvider/lib/useTheme"
import Light from "../../assets/light.svg"
import Dark from "../../assets/dark.svg"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"

export const ThemeSwitcher = () => {
	const { theme, toggleThemeHamdler } = useTheme()
	return (
		<AppButton theme={AppButtonTheme.clear} onClick={toggleThemeHamdler}>
			{theme === "light" ? <Dark /> : <Light />}
		</AppButton>
	)
}
