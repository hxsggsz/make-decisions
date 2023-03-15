import { InputHTMLAttributes, forwardRef } from "react";
import { StyledInput } from ".";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
 }

interface InputContentProps extends InputHTMLAttributes<HTMLInputElement> { }

export const Input = forwardRef<HTMLInputElement, InputProps>(function InputContent({ ...props }: InputProps, ref) {
  return (
    <StyledInput>
        {props.label}
      <input data-testid="input" {...props} ref={ref} />
    </StyledInput>
  );
});
