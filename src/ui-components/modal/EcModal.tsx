import { Modal, Button, Box } from "@mui/material";
import { EcModalProps } from "./types";
import EcButton from "../button/EcButton";

const EcModal = (props: EcModalProps) => {
  const { isOpen, handleClose, children } = props;
  return (
       <Modal open={isOpen} onClose={handleClose}>
      <Box sx={{ width: 300, bgcolor: 'background.paper', p: 4, margin: 'auto', mt: 8 }}>
        <Box>{children}</Box>
        <EcButton onClick={handleClose} variant="text" >Close</EcButton>
      </Box>
    </Modal>
  );
};

export default EcModal;
