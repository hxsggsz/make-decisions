import { InputHTMLAttributes } from "react";
import { StyledInput } from ".";
import { PaperPlaneRight } from "phosphor-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export const Input = ({ ...props }: InputProps) => {
  return (
    <StyledInput>
        Ensira uma opção:
      <input data-testid="input" {...props} />
    </StyledInput>
  );
};
