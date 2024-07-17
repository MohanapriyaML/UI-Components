import { render, screen, waitFor } from "@testing-library/react";
import { UiAlertPropsTest } from "./types";
import userEvent from "@testing-library/user-event";
import UiAlert from "./UiAlert";
import React from "react";

const defaultProps: UiAlertPropsTest = {
  title: "Test Title",
  severity: "info",
  onClose: jest.fn(),
};

describe("EcAlert component", () => {
  it("calls onClose when close button is clicked", async () => {
    render(<UiAlert {...defaultProps}>Test Content</UiAlert>);

    expect(defaultProps.onClose).not.toHaveBeenCalled();

    const closeButton = screen.getByRole("button", { name: /close/i });
    userEvent.click(closeButton);

    await waitFor(() => {
      expect(defaultProps.onClose).toHaveBeenCalled();
      expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
    });
  });
});
