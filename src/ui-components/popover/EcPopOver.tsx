import React from "react";
import { EcPopoverProps } from "./types";
import { Typography, Popover } from "@mui/material";
import { PopOverTypo } from "./EcPopOver.styled";

const EcPopOver: React.FC<EcPopoverProps> = (props) => {
  const { children, open, id, onClose, anchorEl } = props;

  return (
    <Popover id={id} open={open} anchorEl={anchorEl} onClose={onClose}>
      <PopOverTypo>
        <Typography component="div">{children}</Typography>
      </PopOverTypo>
    </Popover>
  );
};

export default EcPopOver;
