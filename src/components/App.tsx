import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage/AboutPage";
import MainPage from "../pages/MainPage/MainPage";
import { Suspense } from "react";

enum Pages {
  "MainPage" = "MainPage",
  "AboutPage" = "AboutPage",
  "UsersPage" = "UsersPage",
}

export const App = () => {
  return (
    <BrowserRouter>
      <Link to={"/about"}>about</Link>
      <Link to={"/"}>main</Link>
      <Suspense>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
