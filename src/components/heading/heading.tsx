import { ReactNode } from "react";
import { HeadingStyles } from ".";

type HeadingTypes = {
  children: ReactNode;
  size?: "sm" | "md";
  variant?: boolean
}

export const Heading = ({ children, size, variant }: HeadingTypes) => (
  <HeadingStyles size={size} variant={variant}>{children}</HeadingStyles>
)