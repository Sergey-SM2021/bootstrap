import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutPage from "pages/AboutPage/AboutPage";
import MainPage from "pages/MainPage/MainPage";
import { Suspense } from "react";
import "./style/index.scss";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "../shared/lib/helpers/classnames/classnames";

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
