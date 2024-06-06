import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import VideoCarousel from "./VideoCarousel";
import "@testing-library/jest-dom";
import { highlightsSlides } from "../constants";

describe("VideoCarousel", () => {
  render(<VideoCarousel />);
  test("renders Carousel__Container", () => {
    expect(screen.getByTestId("Carousel__Container")).toBeDefined();
  });

  test("renders Carousel__Sliders", () => {
    render(<VideoCarousel />);
    const siderElements = screen.getAllByTestId("Carousel__Slider");
    expect(siderElements).toHaveLength(highlightsSlides.length);
  });

  test("renders Carousel__Slider--item", () => {
    render(<VideoCarousel />);
    expect(screen.getAllByTestId("Carousel__Slider--item")).toHaveLength(
      highlightsSlides.length
    );
  });

  test("renders Carousel__Slider--videoCon", () => {
    render(<VideoCarousel />);
    expect(screen.getAllByTestId("Carousel__Slider--videoCon")).toHaveLength(
      highlightsSlides.length
    );
  });

  test("renders Carousel__Slider--video", () => {
    render(<VideoCarousel />);
    expect(screen.getAllByTestId("Carousel__Slider--video")).toHaveLength(
      highlightsSlides.length
    );
  });

  //
  //
  //
  //
  test("renders Carousel__Actions", () => {
    render(<VideoCarousel />);
    expect(screen.getByTestId("Carousel__Actions")).toBeDefined();
    expect(screen.getByTestId("Carousel__Actions")).toHaveClass(
      "relative flex-center mt-10"
    );
  });

  test("renders Carousel__Actions--con", () => {
    render(<VideoCarousel />);
    expect(screen.getByTestId("Carousel__Actions--con")).toBeDefined();
    expect(screen.getByTestId("Carousel__Actions--con")).toHaveClass(
      "flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full"
    );
  });

  //   test("renders Carousel__Actions--loading", () => {
  //     render(<VideoCarousel />);
  //     expect(screen.queryAllByTestId("Carousel__Actions--loading")).toHaveLength(
  //       highlightsSlides.length
  //     );
  //   });

  test("renders Carousel__Actions--btn", () => {
    render(<VideoCarousel />);
    const actionBtnElement = screen.getByTestId("Carousel__Actions--btn");
    expect(actionBtnElement).toBeDefined();
    expect(actionBtnElement).toHaveClass("control-btn");
  });
});
