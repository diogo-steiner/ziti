import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { StyledGlobal } from "./styles/StyledGlobal";
import { StyledReset } from "./styles/StyledReset";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyledReset />
    <StyledGlobal />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
