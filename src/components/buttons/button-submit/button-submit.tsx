import ReactLoading from "react-loading";
import { StyledSubmit } from "../buttons";
import { ButtonTypes } from "../types";

export const Submit = ({ children, isLoading, ...props }: ButtonTypes) => {
  return (
    <StyledSubmit {...props}>
      {isLoading ? (
        <ReactLoading
          data-testid="loading"
          className="spinner"
          type="spin"
          color="#D0D0D0"
          height={28}
          width={28}
        />
      ) : ( 
        children
      )}
    </StyledSubmit>
  )
}