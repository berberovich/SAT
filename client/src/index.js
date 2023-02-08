import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "../src/styles/main.scss";
import { CircularProgress } from "@mui/material";
import "../src/i18n.js";
import { Provider } from "react-redux";
import store from "./redux/store";
import MainDialog from "./components/dialog/MainDialog";
import MainSnackbar from "./components/snackbar/MainSnackbar";

const root = createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<CircularProgress />}>
    <Provider store={store}>
      <MainDialog />
      <MainSnackbar />
      <Router>
        <App />
      </Router>
    </Provider>
  </Suspense>
);
