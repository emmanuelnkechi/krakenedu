import styled from "styled-components"

export const StyledCard = styled.div`
  .card-section {
    display: grid;
    grid-template-columns: 3fr 1fr;
    background: #fff;
    padding: 1.5rem;
    margin-top: 1.5rem;
    border-radius: 5px;
    height: 100%;
    align-items: center;
  }

  .card-section > div:nth-child(1) {
    justify-self: flex-start;
    display: flex;
    gap: 2rem;
  }

  .card-section > div:nth-child(2) {
    justify-self: flex-end;
  }
  h3 {
    margin: 0;
    color: #64637d;
    font-weight: 800;
  }
  .para {
    color: #8f8e9d;
    font-weight: 500;
  }
  .enhancement-div {
    margin-top: 1.5rem;
  }
  .enhancement {
    padding: 0.5rem 0.7rem;
    background: #f5f4fd;
    border-radius: 10px;
    color: #4355c5;
    font-weight: 500;
  }
  .fa-comment {
    color: #d1d0f0;
  }
  .comments {
    margin-left: 0.7rem;
    color: #64637d;
    font-weight: 800;
  }
  .caret-div {
    background: #f2f4f8;
    text-align: center;
    height: 100%;
    padding: 0.3rem 0.3rem 0.6rem 0.3rem;
    border-radius: 5px;
    color: #727783;
    font-weight: 600;
    min-width: 25px;
  }
  .fa-angle-up{
      font-weight: 900;
      margin-bottom: 0.3rem;
  }

   @media only screen and (min-width: 280px) and (max-width: 767px) {
    .card-section {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    }
   }
`;