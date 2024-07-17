import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import UiRadioButton from "./UiRadio";

describe("EcRadioButton", () => {
  it("handles change event correctly", () => {
    const mockProps = {
      value: "option2",
      isSelectedValue: "option1",
      setSelectedValue: jest.fn(),
      disabled: false,
      name: "radio-buttons",
    };

    const { getByLabelText } = render(<UiRadioButton {...mockProps} />);
    const radioInput = getByLabelText("radio-buttons") as HTMLInputElement;

    fireEvent.click(radioInput);

    expect(mockProps.setSelectedValue).toHaveBeenCalledWith("option2");
  });
});
