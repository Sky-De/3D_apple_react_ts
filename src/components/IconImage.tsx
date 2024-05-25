import { ComponentProps } from "react";

type OverrideIconProps<T, TOmited, TMandatory> = Omit<T, keyof TOmited> &
  TMandatory;
export type IconProps = OverrideIconProps<
  ComponentProps<"img">,
  { width: number; height: number; alt: string },
  { alt: string; src: string; className?: string }
>;

const IconImage = ({ className, src, alt, ...props }: IconProps) => {
  return (
    <img
      src={src}
      width={18}
      height={22}
      className={`cursor-pointer sm:w-[22px] sm:h-[26px] ${
        className ? className : ""
      }`}
      {...props}
      alt={alt}
    />
  );
};

export default IconImage;
