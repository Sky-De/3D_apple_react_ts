import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import Features from "./Features";
import { explore1Img, explore2Img } from "../utils";

describe("Features", () => {
  test("renders features section", () => {
    render(<Features />);
    const sectionElement = screen.getByTestId("features_section");
    expect(sectionElement).toBeDefined();
    expect(sectionElement).toHaveClass(
      "h-full common-padding bg-zinc relative overflow-hidden"
    );
  });

  test("renders features container", () => {
    render(<Features />);
    const divElement = screen.getByTestId("features_container");
    expect(divElement).toBeDefined();
    expect(divElement).toHaveClass("screen-max-wdith");
  });

  test("renders features video", () => {
    render(<Features />);
    const sectionElement = screen.getByTestId("features_video");
    expect(sectionElement).toBeDefined();
    expect(sectionElement).toHaveClass(
      "w-full h-full object-cover object-center"
    );
    expect(sectionElement).toHaveAttribute("id", "exploreVideo");
  });

  test("renders features images", () => {
    render(<Features />);
    const imageElements = screen.getAllByRole("img");
    expect(imageElements).toBeDefined();
    expect(imageElements).toHaveLength(2);
    expect(imageElements[0]).toHaveAttribute("src", explore1Img);
    expect(imageElements[1]).toHaveAttribute("src", explore2Img);
  });

  test("renders features h1", () => {
    render(<Features />);
    const heading1Element = screen.getByRole("heading", { level: 1 });
    expect(heading1Element).toBeDefined();
    expect(heading1Element).toHaveClass("section-heading");
    expect(heading1Element).toHaveAttribute("id", "features_title");
    expect(heading1Element).toHaveTextContent(/Explore the full story./i);
  });

  test("renders features h2", () => {
    render(<Features />);
    const heading2Elements = screen.getAllByRole("heading", { level: 2 });
    expect(heading2Elements).toBeDefined();
    expect(heading2Elements).toHaveLength(2);
    expect(heading2Elements[0]).toHaveClass(
      "text-5xl lg:text-7xl font-semibold"
    );
    expect(heading2Elements[1]).toHaveClass(
      "text-5xl lg:text-7xl font-semibold"
    );
    expect(heading2Elements[0]).toHaveTextContent(/iPhone./i);
    expect(heading2Elements[1]).toHaveTextContent(/Forged in titanium./i);
  });

  test("renders features p", () => {
    render(<Features />);
    const pElements = screen.getAllByRole("paragraph");
    expect(pElements).toBeDefined();
    expect(pElements).toHaveLength(2);
    expect(pElements[0]).toHaveClass("feature-text g_text");
    expect(pElements[1]).toHaveClass("feature-text g_text");
  });
});
