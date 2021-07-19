import styled from "styled-components"

export const StyledHome = styled.div`
  background: #f7f8fe;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  padding: 2rem 8rem;

  @media only screen and (min-width: 280px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 1.5rem 0.8rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 2rem;
  }
`;

