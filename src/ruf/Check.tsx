"use client";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import UiButton from "../ui-components/button/UiButton";
import UiDialog from "../ui-components/dialog/UiDialog";
import UiModal from "../ui-components/modal/UiModal";

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
        <UiButton onClick={handleOpenModal} variant="contained" color="primary">
          <Typography>Open Modal</Typography>
        </UiButton>
        <UiModal isOpen={isModalOpen} handleClose={handleCloseModal}>
          <Typography>Just Content Sayyyy in Modal</Typography>
        </UiModal>
      </div>
      <br/>
      <div>
        <UiButton
          onClick={handleOpenDialog}
          variant="contained"
          color="primary"
        >
          <Typography>Open Dialog</Typography>
        </UiButton>
        <UiDialog open={isDialogOpen} handleClose={handleCloseDialog}>
        <Typography>Just Content Sayyyy in Dialog</Typography>
        </UiDialog>
      </div>
    </>
  );
};

export default CheckComponents;
