import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage/AboutPage";
import MainPage from "../pages/MainPage/MainPage";
import { Suspense } from "react";
import "../style/index.scss";
import { ThemeContext } from "../theme/ThemeContext";
import { useTheme } from "../useTheme";
import { classNames } from "../helpers/classnames/classnames";

enum Pages {
  "MainPage" = "MainPage",
  "AboutPage" = "AboutPage",
  "UsersPage" = "UsersPage",
}

export const App = () => {
  const { theme, toggleThemeHamdler } = useTheme();
  return (
    <BrowserRouter>
      <div className={classNames("app", {}, [theme])}>
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
