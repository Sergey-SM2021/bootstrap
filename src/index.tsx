import { createRoot } from "react-dom/client";
import "./components/Counter.scss"
import { App } from "./components/App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
