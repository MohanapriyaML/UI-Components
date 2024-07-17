import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UiLinks from "./UiLinks";
import { UiLinkProps } from "./types";

jest.mock("./UiLink.styled", () => ({
  StyledNextLink: ({
    children,
    $underlineOnHover,
    ...props
  }: {
    children: React.ReactNode;
    $underlineOnHover: boolean;
  }) => (
    <a
      data-underline-on-hover={$underlineOnHover ? "true" : "false"}
      {...props}
    >
      {children}
    </a>
  ),
}));

describe("UiLinks component", () => {
  const defaultProps: UiLinkProps = {
    children: "Test Link",
    className: "test-class",
    underlineOnHover: true,
    href: "/test",
  };

  it("renders the link with correct href and children", () => {
    render(<UiLinks {...defaultProps} />);

    const linkElement = screen.getByText("Test Link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/test");
  });

  it("applies the className correctly", () => {
    render(<UiLinks {...defaultProps} />);

    const linkElement = screen.getByText("Test Link");
    expect(linkElement).toHaveClass("test-class");
  });

  it("applies underlineOnHover prop correctly", () => {
    render(<UiLinks {...defaultProps} />);

    const linkElement = screen.getByText("Test Link");
    expect(linkElement).toHaveAttribute("data-underline-on-hover", "true");
  });

  it("renders without underlineOnHover prop", () => {
    const propsWithoutUnderline = {
      ...defaultProps,
      underlineOnHover: false,
    };
    render(<UiLinks {...propsWithoutUnderline} />);

    const linkElement = screen.getByText("Test Link");
    expect(linkElement).toHaveAttribute("data-underline-on-hover", "false");
  });
});
