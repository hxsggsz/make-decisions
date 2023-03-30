import { InputHTMLAttributes, forwardRef } from "react";
import { StyledInput } from ".";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isactive?: boolean;
 }

export const Input = forwardRef<HTMLInputElement, InputProps>(function InputContent({ ...props }: InputProps, ref) {
  return (
    <StyledInput>
      <label className={props.isactive ? "active" : ""} htmlFor="input">
        {props.label}
      </label>
      <input id="input" data-testid="input" {...props} ref={ref} />
    </StyledInput>
  );
});
