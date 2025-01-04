import "./index.css";
import App from "./App.tsx";

import { SearchProvider } from "./searchContext.jsx";
import { createRoot } from "react-dom/client";
import React from "react";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </React.StrictMode>
);
