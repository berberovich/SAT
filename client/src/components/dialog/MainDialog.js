import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDialog,
  selectDialog,
} from "../../redux/features/dialog/dialogSlice";

function MainDialog() {
  const { open, title, content } = useSelector(selectDialog);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeDialog());
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
}

export default MainDialog;
