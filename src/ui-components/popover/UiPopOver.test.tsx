// EcPopOver.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UiPopOver from "./UiPopOver";

describe("EcPopOver component", () => {
  const mockProps = {
    open: true,
    id: "popover-id",
    onClose: jest.fn(),
    anchorEl: document.createElement("button"),
  };

  test("calls onClose callback when closed", () => {
    render(
      <UiPopOver {...mockProps}>
        <div>Popover Content</div>
      </UiPopOver>
    );

    userEvent.click(document.body);

    setTimeout(() => {
      expect(mockProps.onClose).toHaveBeenCalled();
    }, 0);
  });
});
