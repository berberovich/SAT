import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "../src/styles/main.scss";
import { CircularProgress } from "@mui/material";
import "../src/i18n.js";
const root = createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<CircularProgress />}>
    <Router>
      <App />
    </Router>
  </Suspense>
);
