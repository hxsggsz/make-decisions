import { ButtonTypes } from "../types";
import ReactLoading from "react-loading";
import { StyledSubmit } from "../buttons";
import { PaperPlaneRight } from "phosphor-react";

export const Submit = ({ isLoading, ...props }: ButtonTypes) => {
  return (
    <StyledSubmit {...props}>
      {isLoading ? (
        <ReactLoading
          width={28} 
          height={28}
          type="spin"
          color="#D0D0D0"
          className="spinner"
          data-testid="loading-spinner"
        />
      ) : ( 
        <PaperPlaneRight 
            size={28} 
            weight="bold" 
            data-testid="paper-plane"
            className="paper"
          />
      )}
    </StyledSubmit>
  )
}