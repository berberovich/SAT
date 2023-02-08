import { createSlice, reateSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  severity: "success",
  message: "",
};

export const selectSnackbar = (state) => state.snackbar;

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    closeSnackbar: (state) => {
      state.open = false;
    },
    openSnackbar: (state, { payload }) => {
      const { message, severity } = payload;
      state.open = true;
      state.message = message;
      state.severity = severity;
    },
  },
});

export const { closeSnackbar, openSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
