import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import HowItWorks from "./HowItWorks";
import "@testing-library/jest-dom";
import { chipImg, frameImg, frameVideo } from "../utils";

describe("How it works component", () => {
  test("render how it works - section", () => {
    render(<HowItWorks />);
    const sectionElement = screen.getByTestId("howItWorks_section");
    expect(sectionElement).toBeDefined();
    expect(sectionElement).toHaveClass("common-padding");
  });

  test("render how it works - container", () => {
    render(<HowItWorks />);
    const divElement = screen.getByTestId("howItWorks_container");
    expect(divElement).toBeDefined();
    expect(divElement).toHaveClass("screen-maxj-width");
  });

  test("render images", () => {
    render(<HowItWorks />);
    const imageElements = screen.getAllByRole("img");
    expect(imageElements).toBeDefined();
    expect(imageElements).toHaveLength(2);
    expect(imageElements[0]).toHaveAttribute("width", "180");
    expect(imageElements[0]).toHaveAttribute("height", "180");
    expect(imageElements[0]).toHaveAttribute("alt", "chip");
    expect(imageElements[0]).toHaveAttribute("src", chipImg);

    expect(imageElements[1]).toHaveAttribute("src", frameImg);
    expect(imageElements[1]).toHaveAttribute("alt", "frame");
    expect(imageElements[1]).toHaveClass(
      "bg-transparent relative z-10 md:w-2/3 md:mx-auto"
    );
  });

  test("render first image container", () => {
    const result = render(<HowItWorks />);
    const divElement = result.container.querySelector("#chip");
    expect(divElement).toBeDefined();
    expect(divElement).toHaveAttribute("id", "chip");
    expect(divElement).toHaveClass("flex-center w-full my-20");
  });

  test("render paragraphs", () => {
    render(<HowItWorks />);
    const paragraphElements = screen.getAllByRole("paragraph");
    expect(paragraphElements).toBeDefined();
    expect(paragraphElements).toHaveLength(7);
    // 1 ----------
    expect(paragraphElements[0]).toHaveTextContent(
      /It's here. The biggest redesign in the history of Apple GPUs./i
    );
    expect(paragraphElements[0]).toHaveClass("hiw-subtitle");
    // 2 ----------
    expect(paragraphElements[1]).toHaveTextContent(/Honkai: Star Rail/i);
    expect(paragraphElements[1]).toHaveClass(
      "text-gray font-semibold text-center mt-3"
    );
    // 3 ----------
    expect(paragraphElements[2]).toHaveTextContent(
      /A17 Pro is an entirely new class of iPhone chip that delivers our best graphic performance by far/i
    );
    expect(paragraphElements[2]).toHaveClass("hiw-text g_fadeIn");
    // 4 ----------
    expect(paragraphElements[3]).toHaveTextContent(
      "Mobile games will look and feel so immersive, with incredibly detailed environments and characters."
    );
    expect(paragraphElements[3]).toHaveClass("hiw-text g_fadeIn");
    // 5 ----------
    expect(paragraphElements[4]).toHaveTextContent(/New/i);
    expect(paragraphElements[4]).toHaveClass("hiw-text");
    // 6 ----------
    expect(paragraphElements[5]).toHaveTextContent(/Pro-class GPU/i);
    expect(paragraphElements[5]).toHaveClass("hiw-bigtext");
    // 7 ----------
    expect(paragraphElements[6]).toHaveTextContent(/with 6 cores/i);
    expect(paragraphElements[6]).toHaveClass("hiw-text");
  });

  test("render video", () => {
    render(<HowItWorks />);
    const videoElement = screen.getByTestId("howItWorks_video");
    expect(videoElement).toBeDefined();
    expect(videoElement).toHaveClass("pointer-events-none");
    expect(videoElement).toHaveAttribute("src", frameVideo);
  });

  test("render heading h5", () => {
    render(<HowItWorks />);
    const headingElement = screen.getByRole("heading", { level: 5 });
    expect(headingElement).toBeDefined();
    expect(headingElement).toHaveClass("hiw-title");
    expect(headingElement).toHaveTextContent(
      "A17 Pro chip.Amonster win for gaming."
    );
  });
});
