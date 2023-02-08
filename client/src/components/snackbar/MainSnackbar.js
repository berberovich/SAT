import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSnackbar,
  selectSnackbar,
} from "../../redux/features/snackbar/snackbarSlice";

function MainSnackbar() {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector(selectSnackbar);
  const handleClose = () => dispatch(closeSnackbar());
  return (
    <Snackbar
      anchorOrigin={{ vertical: "buttom", horizontal: "right" }}
      open={open}
      autoHideDuration={4000}
      maxSnack={3}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default MainSnackbar;
