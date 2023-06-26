import { createRoot } from "react-dom/client";
import { Counter } from "./components/Counter";
import "./components/Counter.scss"

const root = createRoot(document.getElementById("root"));
root.render(<Counter />);
