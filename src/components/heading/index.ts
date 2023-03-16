import styled from "styled-components";

type HeadingStylesTypes = {
  size: string | undefined;
  variant: boolean | undefined;
};

function handleSize(size: string | undefined) {
  if (!size) {
    return "6.4rem";
  }

  if (size === "md") {
    return "3.2rem";
  }
  return "2.4rem";
}

export const HeadingStyles = styled.h1<HeadingStylesTypes>`
  font-size: min(${({ size }) => handleSize(size)}, 8vw);
  color: ${({ theme, variant }) => variant ? "#D0D0D0" : theme.Text};
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  text-align: center;
`;
