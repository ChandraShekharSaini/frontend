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
import Divider from '@mui/material/Divider';
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
      <div   onClick={handleClickOpen} className="flex flex-row  items-center gap-4 p-2 cursor-pointer  hover:bg-black hover:text-white ">
        <button
        
          type="button"
          className="text-white bg-red-600 flex justify-center items-center hover:bg-[#ec090a] p-2  rounded-full"
        >
          <DeleteIcon />
        </button>

        <p  className="font-mono"> Delete Account</p>
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
      <div
        onClick={handleClickOpen}
        className="flex flex-row items-center gap-4 p-2 cursor-pointer hover:bg-white hover:text-black"
      >
        <button
          type="button"
          className="text-white bg-red-700 flex justify-center items-center hover:bg-red-600 p-2 rounded-full"
        >
          <DeleteIcon />
        </button>

        <p className="font-mono text-white">Delete Account</p>
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="delete-account-dialog-title"
        PaperProps={{
          style: {
            backgroundColor: "#000",
            color: "#f5f5f5",
          },
        }}
      >
        <DialogTitle id="delete-account-dialog-title">
          Delete Account?
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ color: "#d1d1d1" }}>
            Are you sure you want to delete your account? This action cannot be
            undone and all your data will be permanently removed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            style={{ color: "white", borderColor: "white" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDeleteAccont}
            autoFocus
            style={{
              color: "#fff",
              backgroundColor: "#d32f2f",
              fontWeight: "bold",
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "#b71c1c")
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "#d32f2f")
            }
          >
            Yes, Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
