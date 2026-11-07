import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

/**
 * GitHub Pages is static and cannot serve BrowserRouter routes on refresh.
 * HashRouter makes every page refresh-safe on GitHub Pages.
 * Optional VITE_ROUTER=browser can be used on hosts with an SPA fallback.
 */
const Router = import.meta.env.VITE_ROUTER === "browser" ? BrowserRouter : HashRouter;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
