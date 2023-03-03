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
  return "2.4rem";
}

export const HeadingStyles = styled.h1<HeadingStylesTypes>`
  font-size: ${({ size }) => handleSize(size)};
  color: ${({ theme }) => theme.Text};
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
