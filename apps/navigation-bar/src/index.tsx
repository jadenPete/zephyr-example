import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NavigationBar } from "./components/NavigationBar";
import "./assets/index.css";

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <NavigationBar />
  </StrictMode>,
);
