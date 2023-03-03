import styled from "styled-components";

export const StyledNotFound = styled.div`
  margin-top: 8rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    transform: translateY(-4rem);
  }

  & > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    transform: translateY(-4rem);
  }
`;
