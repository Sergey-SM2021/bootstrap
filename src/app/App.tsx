import { BrowserRouter, Link } from "react-router-dom";
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
      </div>
    </BrowserRouter>
  );
};
