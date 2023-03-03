import { ReactNode } from "react";
import { StyledButton } from "."
import { Heading } from "../heading/heading"

type ButtonTypes = {
  children: ReactNode;
}

export const Button = ({ children }: ButtonTypes) => {
  return (
    <StyledButton><Heading size="md">{children}</Heading></StyledButton>
  )
}