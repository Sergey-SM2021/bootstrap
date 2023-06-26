import { PropsWithChildren, useState } from "react";
import { Theme, ThemeContext } from "../lib/ThemeContext";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(Theme.lightTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
