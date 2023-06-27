import { BrowserRouter } from "react-router-dom";
import "./style/index.scss";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "../shared/lib/helpers/classnames/classnames";
import { RouterProvider } from "./providers/RouterProvider/ui/RouterProvider";
import { Navbar } from "widgets/navbar/ui/navbar";

export const App = () => {
  const { theme, toggleThemeHamdler } = useTheme();
  return (
    <BrowserRouter>
      <div className={classNames("app", {}, [theme])}>
        <Navbar />
        <RouterProvider />
      </div>
    </BrowserRouter>
  );
};
