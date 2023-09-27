import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalCSS from "./styles/globalCSS.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalCSS />
    <App />
  </React.StrictMode>
);
