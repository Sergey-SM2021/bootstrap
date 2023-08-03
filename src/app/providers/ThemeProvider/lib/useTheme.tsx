import { useContext, useEffect } from "react"
import { Theme, ThemeContext } from "./ThemeContext"

export const useTheme = () => {
	const { setTheme, theme } = useContext(ThemeContext)

	const toggleThemeHamdler = () => {
		switch (theme) {
		case Theme.darkTheme:
			setTheme(Theme.CustomTheme)
			break
		case Theme.lightTheme:
			setTheme(Theme.darkTheme)
			break
		case Theme.CustomTheme:
			setTheme(Theme.lightTheme)
			break
		}
	}

	useEffect(() => {
		document.body.className = ""
		document.body.classList.add(theme)
	}, [theme])

	return {
		theme,
		toggleThemeHamdler,
	}
}
