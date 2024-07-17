import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UiModalProps } from "./types";
import UiModal from "./UiModal";

describe("EcModal", () => {
  const handleClose = jest.fn();
  const defaultProps: UiModalProps = {
    isOpen: true,
    handleClose,
    children: <div>Modal Content</div>,
  };

  it("renders the modal when open", () => {
    render(<UiModal {...defaultProps} />);
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });

  it("calls handleClose when the close button is clicked", () => {
    render(<UiModal {...defaultProps} />);
    fireEvent.click(screen.getByRole("button", { name: /close/i }));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("does not render the modal when isOpen is false", () => {
    render(<UiModal {...defaultProps} isOpen={false} />);
    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });
});
