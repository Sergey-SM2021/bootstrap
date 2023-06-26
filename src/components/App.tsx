import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage/AboutPage";
import MainPage from "../pages/MainPage/MainPage";
import { Suspense, useContext } from "react";
import "../style/index.scss";
import { Theme, ThemeContext } from "../theme/ThemeContext";

enum Pages {
  "MainPage" = "MainPage",
  "AboutPage" = "AboutPage",
  "UsersPage" = "UsersPage",
}

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

export const App = () => {
  const { theme, toggleThemeHamdler } = useTheme();
  return (
    <BrowserRouter>
      <div className={`app ${theme}`}>
        <Link to={"/about"}>about</Link>
        <Link to={"/"}>main</Link>
        <button onClick={toggleThemeHamdler}>toggle theme</button>
        <Suspense>
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
