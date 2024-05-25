import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import IconImage, { IconProps } from "./IconImage";

const IconImageMockProps: IconProps = {
  src: "imageSrc",
  alt: "imageAlt",
};

describe("IconImage", () => {
  test("renders image", () => {
    render(<IconImage {...IconImageMockProps} />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeDefined();
    expect(imgElement).toHaveAttribute("src", IconImageMockProps.src);
    expect(imgElement).toHaveAttribute("alt", IconImageMockProps.alt);
  });

  test("constant style of IconImage width, height, className", () => {
    render(<IconImage {...IconImageMockProps} />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toHaveAttribute("width", "18");
    expect(imgElement).toHaveAttribute("height", "22");
    expect(imgElement).toHaveAttribute(
      "class",
      "cursor-pointer sm:w-[22px] sm:h-[26px] "
    );
  });

  const mockExtraClassName = "class1 class2";
  test("extra class name should add to constant class name", () => {
    render(
      <IconImage {...IconImageMockProps} className={mockExtraClassName} />
    );
    const imgElement = screen.getByRole("img");
    expect(imgElement).toHaveAttribute(
      "class",
      `cursor-pointer sm:w-[22px] sm:h-[26px] ${mockExtraClassName}`
    );
  });
});
