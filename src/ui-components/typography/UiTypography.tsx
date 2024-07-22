import React, { PropsWithChildren } from "react";
import { UiTypographyProps } from "./types";
import { Typography } from "@mui/material";

const UiTypography = ({
  children,
  fontStyle = "normal",
  weight = "normal",
  className = "",
  variant = "p-l",
  decoration = "none",
  color = "#000",
  additionalProps = {},
  coloroverride = "",
}: PropsWithChildren<UiTypographyProps>) => {
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

export default UiTypography;
