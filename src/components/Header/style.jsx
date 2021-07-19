import styled from "styled-components"

export const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #383e68;
  color: #fff;
  border-radius: 5px;
  padding: 1rem;

  .suggestions-div {
    display: flex;
    gap: 3rem;
    height: 100%;
    align-items: center;
  }
  .suggestions {
    font-style: bold;
    font-weight: 800;
    margin-left: 1.2rem;
  }
  .fa-user {
    color: #dadee2;
  }
  .add-btn {
    justify-self: right;
  }
  .rates {
    font-style: bold;
    font-weight: 800;
  }
  .add-btn > button {
    background: #ad4df0;
    color: #fff;
    border-radius: 5px;
    border: none;
    padding: 0.5rem 0.8rem;
    font-weight: 600;
  }
  .fa-angle-down {
    font-weight: 900;
    margin-left: 0.3rem;
  }
  .sort-by {
    color: #dadee2;
  }
  @media only screen and (min-width: 280px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr;
    .add-btn {
      width: 100%;
      margin-top: 1rem;
    }
    .suggestions-div {
      display: grid;
      grid-template-columns: 1fr;
      flex-direction: column;
      gap: 1rem;
      height: 100%;
      align-items: center;
    }
    .suggestions {
      margin-left: 0.5rem;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr;

    .add-btn {
      width: 100%;
      margin-top: 1rem;
    }
  }
`;