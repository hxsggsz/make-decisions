import styled from "styled-components";

export const StyledIndex = styled.div`
  .desktop {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .desktop button {
    bottom: 0.5rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
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
      margin-top: 6rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .mobile button {
    bottom: 0.5rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
