import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router";
import "./index.css";
import "./i18n";
import App from "./App.tsx";
import About from "./pages/About/About.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";

document.documentElement.setAttribute("data-theme", "default-theme");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
