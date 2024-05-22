import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";
import { navLists } from "../constants";
import "@testing-library/jest-dom";

describe("Navbar", () => {
  test("renders nav", () => {
    render(<Navbar />);
    expect(screen.getByRole("navigation")).toBeDefined();

    expect(screen.getAllByTestId("navItem")).toHaveLength(navLists.length);
    expect(screen.getAllByTestId("navItem")[0]).toHaveTextContent(navLists[0]);
  });

  test("renders image icons", () => {
    render(<Navbar />);
    expect(screen.getAllByRole("img")).toBeDefined();
    expect(screen.getAllByRole("img")).toHaveLength(3);
  });

  test("renders navItems", () => {
    render(<Navbar />);
    expect(screen.getAllByTestId("navItem")).toBeDefined();
    expect(screen.getAllByTestId("navItem")).toHaveLength(navLists.length);
    expect(screen.getAllByTestId("navItem")[0]).toHaveTextContent(navLists[0]);
  });
});
