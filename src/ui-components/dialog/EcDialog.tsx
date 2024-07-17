import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import React from "react";
import { EcDialogProps } from "./types";
import CloseIcon from "@mui/icons-material/Close";

const EcDialog = (props: EcDialogProps) => {
  const { children, open, handleClose, fullScreen } = props;

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"Use Google's location service?"}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default EcDialog;
