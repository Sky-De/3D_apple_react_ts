import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import Maintenance from "./Maintain";
import { MaintenanceSvg } from "../utils";

describe("Maintain", () => {
  test("render main", () => {
    render(<Maintenance />);
    const mainElelment = screen.getByRole("main");
    expect(mainElelment).toBeDefined();
    expect(mainElelment).toHaveClass("maintenance");
  });

  test("render image", () => {
    render(<Maintenance />);
    const mainElelment = screen.getByRole("img");
    expect(mainElelment).toBeDefined();
    expect(mainElelment).toHaveClass("maintenance__svg");
    expect(mainElelment).toHaveAttribute("src", MaintenanceSvg);
    expect(mainElelment).toHaveAttribute("alt", "Maintenance");
    expect(mainElelment).toHaveAttribute(
      "title",
      "SVG belongs to https://storyset.com/"
    );
  });

  test("render heading h3", () => {
    render(<Maintenance />);
    const headingH3Elelment = screen.getByRole("heading", { level: 3 });
    expect(headingH3Elelment).toBeDefined();
    expect(headingH3Elelment).toHaveTextContent(
      /Sorry, our app is under Maintenance/i
    );
  });

  test("render heading h4", () => {
    render(<Maintenance />);
    const headingH3Elelment = screen.getByRole("heading", { level: 4 });
    expect(headingH3Elelment).toBeDefined();
    expect(headingH3Elelment).toHaveTextContent(/we'll back soon/i);
  });
});
