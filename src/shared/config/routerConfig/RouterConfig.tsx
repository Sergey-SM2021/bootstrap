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
  },
  home: {
    path: RouterPaths.home,
  },
};
