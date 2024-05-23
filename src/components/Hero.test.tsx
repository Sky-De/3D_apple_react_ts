import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Hero } from "./Hero";
import "@testing-library/jest-dom";

describe("HeroSection", () => {
  test("renders nav", () => {
    render(<Hero />);
    expect(screen.getByTestId("heroSection")).toBeDefined();
  });

  test("renders hero title", () => {
    render(<Hero />);
    expect(screen.getByText(/iPhone 15 Pro/i)).toBeDefined();
  });

  test("renders video", () => {
    render(<Hero />);
    const heroVideoElement = screen.getByTestId("heroVideo");
    expect(heroVideoElement).toBeDefined();
    expect(heroVideoElement).toHaveAttribute("autoPlay");
  });

  test("renders ctaCon", () => {
    render(<Hero />);
    expect(screen.getByTestId("ctaCon")).toBeDefined();
  });

  test("renders ctaLink", () => {
    render(<Hero />);
    expect(screen.getByTestId("ctaLink")).toBeDefined();
    expect(screen.getByTestId("ctaLink")).toHaveTextContent(/buy/i);
    expect(screen.getByTestId("ctaLink")).toHaveAttribute(
      "href",
      "#highlights"
    );
  });

  test("renders ctaP", () => {
    render(<Hero />);
    expect(screen.getByTestId("ctaP")).toBeDefined();
    expect(screen.getByTestId("ctaP")).toHaveTextContent(
      "From $199/month or $999"
    );
  });
});
