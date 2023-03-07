import { StyledButton } from ".";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { Heading } from "../heading/heading";
import ReactLoading from "react-loading";

interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading: boolean;
}

export const Button = ({ children, isLoading, ...props }: ButtonTypes) => {
  return (
    <StyledButton {...props}>
      <Heading size="md">
        {isLoading ? (
          <ReactLoading
            data-testid="loading"
            className="spinner"
            type="spin"
            color="#534963"
            height={38}
            width={38}
          />
        ) : (
          children
        )}
      </Heading>
    </StyledButton>
  );
};
