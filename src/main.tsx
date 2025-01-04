import "./index.css";
import { SearchProvider } from "./searchContext.jsx";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </React.StrictMode>
);
