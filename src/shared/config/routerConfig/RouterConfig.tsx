import AboutPage from "pages/AboutPage/AboutPage";
import MainPage from "pages/MainPage/MainPage";
import { RouteProps } from "react-router-dom";

enum RouterPages {
  HOME = "home",
  ABOUT = "about",
}

const RouterPaths: Record<RouterPages, string> = {
  about: "/about",
  home: "/",
};

export const RouterConfig: Record<RouterPages, RouteProps> = {
  about: {
    path: RouterPaths.about,
    element: <AboutPage />,
  },
  home: {
    element: <MainPage />,
    path: RouterPaths.home,
  },
};
