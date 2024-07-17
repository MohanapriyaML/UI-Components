import React, { PropsWithChildren } from "react";
import { EcTypographyProps } from "./types";
import { Typography } from "@mui/material";

const EcTypography = ({
  children,
  fontStyle = "normal",
  weight = "normal",
  className = "",
  variant = "p-l",
  decoration = "none",
  color = "primary",
  additionalProps = {},
  coloroverride = "",
}: PropsWithChildren<EcTypographyProps>) => {
  return (
    <Typography
      fontStyle={fontStyle}
      className={className}
      fontWeight={weight}
      variant={variant}
      textDecoration={decoration}
      color={color}
      coloroverride={coloroverride}
      {...additionalProps}
    >
      {children}
    </Typography>
  );
};

export default EcTypography;
