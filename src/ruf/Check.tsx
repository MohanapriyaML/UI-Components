"use client";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import EcButton from "../ui-components/button/EcButton";
import EcDialog from "../ui-components/dialog/EcDialog";
import EcModal from "../ui-components/modal/EcModal";

const CheckComponents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <div>
        <EcButton onClick={handleOpenModal} variant="contained" color="primary">
          <Typography>Open Modal</Typography>
        </EcButton>
        <EcModal isOpen={isModalOpen} handleClose={handleCloseModal}>
          <Typography>Just Content Sayyyy in Modal</Typography>
        </EcModal>
      </div>
      <br/>
      <div>
        <EcButton
          onClick={handleOpenDialog}
          variant="contained"
          color="primary"
        >
          <Typography>Open Dialog</Typography>
        </EcButton>
        <EcDialog open={isDialogOpen} handleClose={handleCloseDialog}>
        <Typography>Just Content Sayyyy in Dialog</Typography>
        </EcDialog>
      </div>
    </>
  );
};

export default CheckComponents;
