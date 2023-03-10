import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  asChild?: boolean;
}
