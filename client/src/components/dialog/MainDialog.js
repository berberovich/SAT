import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDialog,
  selectDialog,
} from "../../redux/features/dialog/dialogSlice";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./MainDialog.scss";

function MainDialog() {
  const { open, title, content } = useSelector(selectDialog);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeDialog());
  };
  return (
    <Dialog open={open} onClose={handleClose} className="dialog-container">
      <DialogTitle>
        {" "}
        {title}{" "}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          className="dialog-btn-close"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
}

export default MainDialog;
