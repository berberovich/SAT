import { configureStore } from "@reduxjs/toolkit";
import dialogSlice from "./features/dialog/dialogSlice";
import snackbarSlice from "./features/snackbar/snackbarSlice";

const store = configureStore({
  reducer: {
    dialog: dialogSlice,
    snackbar: snackbarSlice,
  },
});

export default store;
