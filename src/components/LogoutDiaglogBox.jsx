import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import authCustomhook from "../customhooks/AuthCustomHook";
import LogoutIcon from "@mui/icons-material/Logout";

export default function LogoutDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { handleLogout } = authCustomhook();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogoutAccount = () => {
    handleLogout();
    console.log("User logged out");
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className="flex flex-row gap-4 p-2  pl-4 ">
        <button
          type="button"
          onClick={handleClickOpen}
          className="text-white bg-blue-500 hover:bg-[#3065d8] p-2    rounded-md"
        >
          <LogoutIcon /> Logout
        </button>
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="logout-dialog-title"
      >
        <DialogTitle id="logout-dialog-title">Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to logout? You will need to sign in again to
            access your account.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleLogoutAccount} autoFocus color="primary">
            Yes, Logout
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
