import { render, screen, fireEvent } from "@testing-library/react";
import EcDialog from "./UiDialog";
import UiDialog from "./UiDialog";
import React from "react";

describe("EcDialog component", () => {
  test("renders dialog with correct title", () => {
    const handleClose = jest.fn();
    render(
      <UiDialog open={true} handleClose={handleClose}>
        <div>Dialog content</div>
      </UiDialog>
    );

    const dialogTitle = screen.getByText(/Use Google's location service?/i);
    expect(dialogTitle).toBeInTheDocument();
  });

  test("calls handleClose when dialog is closed", () => {
    const handleClose = jest.fn();
    render(
      <UiDialog open={true} handleClose={handleClose}>
        <div>Dialog content</div>
      </UiDialog>
    );

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
