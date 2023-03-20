import styled from "styled-components";

export const StyledVotes = styled.div`
  .container {
    max-width:60vw;
    display: grid;
    grid-gap: 1.2rem 2rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 3fr));
    grid-auto-flow: row;
    grid-auto-columns: minmax(200px, 1fr);
    
    @media (max-width: 435px) {
      max-width: 100vw;
    }
}
`;