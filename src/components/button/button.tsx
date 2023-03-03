import { StyledButton } from "."
import { Heading } from "../heading/heading"

type ButtonTypes = {
  text: string;
  desktop?: boolean;
}

export const Button = ({ text, desktop }: ButtonTypes) => {
  return (
    <StyledButton desktop={desktop}><Heading size="md">{text}</Heading></StyledButton>
  )
}