import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";

import authCustomhook from "../customhooks/AuthCustomHook";

export default function DeleteAccountDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { handleDelete } = authCustomhook();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteAccont = () => {
    handleDelete();
    console.log("Account deleted");
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className="flex flex-row gap-4 p-2  pl-4 ">
        <button
          onClick={handleClickOpen}
          type="button"
          className="text-white bg-red-600 hover:bg-[#ec090a] p-2  rounded-md"
        >
          <DeleteIcon /> Delete Account
        </button>
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="delete-account-dialog-title"
      >
        <DialogTitle id="delete-account-dialog-title">
          Delete Account?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete your account? This action cannot be
            undone and all your data will be permanently removed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDeleteAccont} autoFocus color="error">
            Yes, Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
