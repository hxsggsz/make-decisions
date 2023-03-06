import { StyledButton } from ".";
import { ReactNode } from "react";
import { Heading } from "../heading/heading";

type ButtonTypes = {
  children: ReactNode;
  isLoading: boolean;
}

export const Button = ({ children, isLoading }: ButtonTypes) => {
  return (
    <StyledButton><Heading size="md">{isLoading ? "carregando" : children}</Heading></StyledButton>
  )
}