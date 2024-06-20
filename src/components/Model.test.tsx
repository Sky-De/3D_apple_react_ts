import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import Model from "./Model";

describe("Model", () => {
  test("renders model section", () => {
    render(<Model />);
    const sectionElement = screen.getByTestId("modelSection");
    expect(sectionElement).toBeDefined();
    expect(sectionElement).toHaveClass("common-padding");
  });

  test("renders model heading", () => {
    render(<Model />);
    const h2Element = screen.getByRole("heading", { level: 2 });
    expect(h2Element).toBeDefined();
    expect(h2Element).toHaveClass("section-heading");
    expect(h2Element).toHaveAttribute("id", "heading");
    expect(h2Element).toHaveTextContent(/Take a closer look/i);
  });
});
