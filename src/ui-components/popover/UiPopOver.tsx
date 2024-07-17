import React from "react";
import { UiPopoverProps } from "./types";
import { Typography, Popover } from "@mui/material";
import { PopOverTypo } from "./UiPopOver.styled";

const UiPopOver: React.FC<UiPopoverProps> = (props) => {
  const { children, open, id, onClose, anchorEl } = props;

  return (
    <Popover id={id} open={open} anchorEl={anchorEl} onClose={onClose}>
      <PopOverTypo>
        <Typography component="div">{children}</Typography>
      </PopOverTypo>
    </Popover>
  );
};

export default UiPopOver;
