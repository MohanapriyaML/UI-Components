import React from "react";
export interface UiAlertProps {
  title?: string;
  severity?: "success" | "warning" | "error" | "info";
  variant?: "standard" | "filled" | "outlined";
  color?: "success" | "warning" | "error" | "info" | "primary";
  onClose?: () => void;
  children: string | React.ReactNode;
}
export type UiAlertPropsTest = {
  title: string;
  severity?: "info" | "success" | "warning" | "error";
  onClose: () => void;
};
