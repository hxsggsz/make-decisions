import styled from "styled-components";

export const mobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    /* margin-top: 3rem; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const desktop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media (max-width: 768px) {
    display: none;
  }
`;


export const container = styled.div`
  max-width: 40vw;
  display: flex;
  gap: 2rem 0;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;