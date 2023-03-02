import styled from "styled-components";

type HeadingStylesTypes = {
  size: string | undefined;
};

function handleSize(size: string | undefined) {
  if (!size) {
    return "6.4rem";
  }

  if (size === "md") {
    return "3.2rem";
  }
  return "1.2rem";
}

export const HeadingStyles = styled.h1<HeadingStylesTypes>`
  font-size: ${({ size }) => handleSize(size)};
`;
