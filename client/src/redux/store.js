import { configureStore } from "@reduxjs/toolkit";
import dialogSlice from "./features/dialog/dialogSlice";

const store = configureStore({
  reducer: {
    dialog: dialogSlice,
  },
});

export default store;
