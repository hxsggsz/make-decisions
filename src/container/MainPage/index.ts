import styled from "styled-components";

export const StyledIndex = styled.div`
  .desktop {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .container {
    max-width: 40vw;
    display: flex;
    gap: 2rem 0;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .mobile {
    display: none;
    @media (max-width: 768px) {
      display: flex;
      margin-top: 8rem;
      gap: 3em 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
