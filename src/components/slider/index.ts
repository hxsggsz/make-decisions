import styled from "styled-components";

export const slider = styled.div`
  .carousel .slide {
    display: flex;
    align-items: end;
    justify-content: center;
  }

  .carousel .slide img {
    width: 335px;
    height: 280px;
    pointer-events: none;
    @media (max-width: 420px) {
      max-width: 100vw;
    }
  }
`;

export const container = styled.div`
  margin-bottom: 3.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  border: 4px solid ${({ theme }) => theme.Text};
  border-bottom: 8px solid ${({ theme }) => theme.Text};
  
  @media (max-width: 768px) {
    min-width: 90vw;
  }
`;