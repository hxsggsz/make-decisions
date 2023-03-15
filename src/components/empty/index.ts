import styled from 'styled-components';

export const StyledEmpty = styled.div`
  max-width:50vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  @media (max-width: 960px) { 
    max-width: 90vw;
  }

  @media (max-width: 506px) { 
    img {
      width: 100vw;
    }
  }
`;