import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./fake-api/api.ts";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { moviesApi } from "./features/moviesSlice.ts";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApiProvider api={moviesApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
