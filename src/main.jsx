import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1 className="text-3xl font-semibold">Hallo World</h1>
  </StrictMode>
);
