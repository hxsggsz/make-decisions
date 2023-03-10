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
          color="#534963"
          height={38}
          width={38}
        />
      ) : (
        children
      )}
    </StyledSubmit>
  )
}