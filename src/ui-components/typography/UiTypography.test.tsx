import React from "react";
import { render } from "@testing-library/react";
import UiTypography from './UiTypography';

describe("EcTypography component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <UiTypography>
        <span>Hello, World!</span>
      </UiTypography>
    );

    expect(getByText("Hello, World!")).toBeInTheDocument();
  });

  it("applies className prop correctly", () => {
    const { container } = render(
      <UiTypography className="custom-class">
        <span>Hello, World!</span>
      </UiTypography>
    );

    const typographyElement = container.firstChild as HTMLElement;
    expect(typographyElement).toHaveClass("custom-class");
  });
});
