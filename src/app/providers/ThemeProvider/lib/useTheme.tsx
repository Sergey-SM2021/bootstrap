import { useContext } from "react";
import { Theme, ThemeContext } from "./ThemeContext";

export const useTheme = () => {
  const { setTheme, theme } = useContext(ThemeContext);

  const toggleThemeHamdler = () => {
    if (theme === Theme.lightTheme) {
      setTheme(Theme.darkTheme);
    } else {
      setTheme(Theme.lightTheme);
    }
  };

  return {
    theme,
    toggleThemeHamdler,
  };
};
