import { createRoot } from "react-dom/client";
import "./components/Counter.scss";
import { App } from "./components/App";
import { ThemeProvider } from "./theme/ThemeProvider";

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
