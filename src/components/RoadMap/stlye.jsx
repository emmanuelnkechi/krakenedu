import styled from "styled-components"

export const StyledMap = styled.div`
  background: #fff;
  padding: 1.5rem;
  margin-top: 1.5rem;
  border-radius: 5px;

  .roadmap {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .roadmap > div:nth-child(2) {
    justify-self: right;
  }
  h3 {
    margin: 0;
    color: #464562;
    margin-bottom: 1.5rem;
  }
  .views > p {
    text-align: right;
    margin: 0;
    margin-top: 1rem;
  }
  .views > div {
    margin-bottom: 1.5rem;
  }
  .views > div > a {
    color: #7272be;
    font-weight: 600;
    margin-top: 1rem;
  }
  .roadmap-list {
    color: #8f8e9d;
  }
  .roadmap-list > div {
    display: flex;
    gap: 1rem;
    margin: 0;
    height: 1rem;
    align-items: center;
    margin-top: 1rem;
  }

  .roadmap-list > div > p {
    margin: 0;
  }
  .orange,
  .purple,
  .blue {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
  }
  .orange {
    background: #e5a8ad;
  }
  .purple {
    background: #8e49d5;
  }
  .blue {
    background: #83b9dc;
  }
`;