import { createSlice, reateSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  title: "",
  content: "",
};

export const selectDialog = (state) => state.dialog;

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    closeDialog: (state) => {
      state.open = false;
    },
    openDialog: (state, { payload }) => {
      const { title } = payload;
      state.open = true;
      state.title = title;
    },
  },
});

export const { closeDialog, openDialog } = dialogSlice.actions;

export default dialogSlice.reducer;
