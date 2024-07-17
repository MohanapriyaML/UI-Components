"use client";
import React from "react";
import { UpCheckBoxProps } from "./types";
import { default as MUICheckbox } from '@mui/material/Checkbox';
import { FormControlLabel } from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const EcCheckbox = (props: UpCheckBoxProps) => {
  const {
    name,
    label,
    onChange,
    checked,
    'aria-label': ariaLabel = "Ec checkbox",
    disabled = false,
    size = "small",
    className = "",
    icon = <CheckBoxOutlineBlankIcon fontSize="small" />,
    checkedIcon = <CheckBoxIcon fontSize="small" />,
  } = props;
  return (
    <FormControlLabel
    control={
      <MUICheckbox
        name={name}
        onChange={onChange}
        checked={checked}
        aria-label={ariaLabel}
        disabled={disabled}
        size={size}
        className={className}
        icon={icon}
        checkedIcon={checkedIcon}
      />
    }
    label={label}
  />
  );
};

export default EcCheckbox;
