import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Highlights from "./Highlights";
// import { rightImg, watchImg } from "../utils";
import "@testing-library/jest-dom";

describe("Highlights", () => {
  test("render highlights section", () => {
    render(<Highlights />);
    const sectionElement = screen.getByTestId("highlights_section");
    expect(sectionElement).toBeDefined();
    expect(sectionElement).toHaveClass(
      "w-screen overflow-hidden h-full common-padding bg-zinc"
    );
  });

  test("render highlights container", () => {
    render(<Highlights />);
    const divElement = screen.getByTestId("highlights_container");
    expect(divElement).toBeDefined();
    expect(divElement).toHaveClass("screen-max-width");
  });

  test("render highlights container", () => {
    render(<Highlights />);
    const divElement = screen.getByTestId("highlights_content");
    expect(divElement).toBeDefined();
    expect(divElement).toHaveClass(
      "mb-12 w-full md:flex items-end justify-between"
    );
  });

  test("render highlights h1", () => {
    render(<Highlights />);
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toBeDefined();
    expect(headingElement).toHaveClass("section-heading");
    expect(headingElement).toHaveAttribute("id", "title");
    expect(headingElement).toHaveTextContent(/Get the highlights./i);
  });

  test("render highlights paragraphs", () => {
    render(<Highlights />);
    const paragraphsElement = screen.getAllByRole("paragraph");
    expect(paragraphsElement).toBeDefined();
    expect(paragraphsElement[0]).toHaveClass("link");
    expect(paragraphsElement[0]).toHaveTextContent(/Whatch the film/i);
    expect(paragraphsElement[1]).toHaveClass("link");
    expect(paragraphsElement[1]).toHaveTextContent(/Whatch the event/i);
  });

  //   test("render highlights images", () => {
  //     render(<Highlights />);
  //     const imageElements = screen.getAllByRole("img");
  //     expect(imageElements).toBeDefined();
  //     expect(imageElements).toHaveLength(2);
  //     expect(imageElements[0]).toHaveClass("ml-2");
  //     expect(imageElements[0]).toHaveAttribute("src", watchImg);
  //     expect(imageElements[1]).toHaveClass("ml-2");
  //     expect(imageElements[1]).toHaveAttribute("src", rightImg);
  //   });
});
