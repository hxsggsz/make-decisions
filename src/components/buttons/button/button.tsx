import { StyledButton } from "../buttons";
import { ButtonTypes } from "../types"
import ReactLoading from "react-loading";
import { Slot } from "@radix-ui/react-slot";

export const Button = ({ children, isLoading, asChild, ...props }: ButtonTypes) => {
  /**
   * Slot faz com que caso asChild seja true, ele renderize o componente como se fosse seu filho
   * ex se o componente tem um children <a></a> ele vai renderizar como se fosse um <a></a>
   */
  const Comp = asChild ? Slot : 'button'
  return (
    <StyledButton>
      <Comp className="button" {...props}>
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
      </Comp>
    </StyledButton>
  );
};
