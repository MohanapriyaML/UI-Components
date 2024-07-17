import { Modal, Button, Box } from "@mui/material";
import { UiModalProps } from "./types";
import React from "react";
import UiButton from "../button/UiButton";

const UiModal = (props: UiModalProps) => {
  const { isOpen, handleClose, children } = props;
  return (
       <Modal open={isOpen} onClose={handleClose}>
      <Box sx={{ width: 300, bgcolor: 'background.paper', p: 4, margin: 'auto', mt: 8 }}>
        <Box>{children}</Box>
        <UiButton onClick={handleClose} variant="text" >Close</UiButton>
      </Box>
    </Modal>
  );
};

export default UiModal;
