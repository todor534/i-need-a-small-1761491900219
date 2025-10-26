import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Minimal global style injection (for demonstration, main styles in global.css)
const globalStyles: React.CSSProperties = {
  fontFamily: "Segoe UI, Arial, sans-serif",
  background: "#f6f7fb",
  minHeight: "100vh",
  margin: 0,
  color: "#222",
};

const rootElement = document.getElementById("root");

if (rootElement) {
  Object.assign(rootElement.style, globalStyles);
}

ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);