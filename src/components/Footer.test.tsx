import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import Footer from "./Footer";
import { footerLinks } from "../constants";

describe("HeroSection", () => {
  test("renders footer", () => {
    render(<Footer />);
    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeDefined();
    expect(footerElement).toHaveClass("py-5 sm:px-10 px-5");
  });

  test("renders footer links", () => {
    render(<Footer />);
    const linkElements = screen.getAllByTestId("footer_link");
    expect(linkElements).toBeDefined();
    expect(linkElements).toHaveLength(footerLinks.length);
    expect(linkElements[0]).toHaveClass("footer_link");
  });

  test("renders footer link dividers", () => {
    render(<Footer />);
    const spanElements = screen.getAllByTestId("footer_link--divider");
    expect(spanElements).toBeDefined();
    expect(spanElements).toHaveLength(footerLinks.length - 1);
    expect(spanElements[0]).toHaveClass("text-gray ml-1");
  });
});
