import { Dispatch, SetStateAction, createContext } from "react"

export enum Theme {
  "lightTheme" = "light",
  "darkTheme" = "dark",
}

interface ThemeContextProps {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
	setTheme: () => {},
	theme: Theme.lightTheme,
})
