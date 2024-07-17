import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import FormPassword from "./input-password";

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  Controller: ({ render }:any) =>
    render({ field: { onChange: jest.fn(), value: "" } }),
}));
describe("FormPassword Component", () => {
  it("toggles password visibility correctly", () => {
    render(<FormPassword control={{}} rules={{}} name="password" />);
    const toggleButton = screen.getByLabelText("toggle password visibility");
    fireEvent.click(toggleButton);
    const passwordInput = screen.getByRole("textbox");
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute("type", "text");
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "password");
  });
});