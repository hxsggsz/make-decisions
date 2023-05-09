import { InputHTMLAttributes, forwardRef } from "react";
import * as style from ".";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isactive?: boolean;
 }

export const Input = forwardRef<HTMLInputElement, InputProps>(function InputContent({ ...props }: InputProps, ref) {
  return (
    <style.wrapper>
      <style.label className={props.isactive ? "active" : ""} htmlFor="input">
        {props.label}
      </style.label>
      <style.input id="input" data-testid="input" {...props} ref={ref} />
    </style.wrapper>
  );
});
