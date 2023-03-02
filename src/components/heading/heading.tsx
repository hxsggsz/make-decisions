import { ReactNode } from "react";
import { HeadingStyles } from ".";

type HeadingTypes = {
  children: ReactNode;
  size?: "sm" | "md";
}

export const Heading = ({ children, size }: HeadingTypes) => {
  return (
    <HeadingStyles size={size}>{children}</HeadingStyles>
  )
}