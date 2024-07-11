import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import Loader from "./Loader";

describe("Loader", () => {
  test("render loader container", () => {
    render(<Loader />);
    const divElement = screen.getByTestId("loaderCon");
    expect(divElement).toBeDefined();
    expect(divElement).toHaveClass("absolute top-0 left-0 w-full h-full");
  });
  test("render loader", () => {
    render(<Loader />);
    const divElement = screen.getByTestId("loader");
    expect(divElement).toBeDefined();
    expect(divElement).toHaveClass(
      "w-6 h-6 rounded-full border-4 border-t-orange-500 animate-spin"
    );
  });
});
