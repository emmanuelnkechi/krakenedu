import styled from "styled-components"

export const StyledLabels = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 5px;
  margin-top: 1.5rem;

  .labels-div > div:nth-child(1) {
    display: flex;
    /* grid-template-columns: 1fr 1fr 1fr; */
    gap: 0.5rem;
  }
  .labels-div > div:nth-child(2) {
    display: flex;
    /* grid-template-columns: 2fr 1fr; */
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .labels-div > div:nth-child(3) {
    display: flex;
    /* grid-template-columns: 1fr 1fr 1fr; */
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .labels-div > div > div {
    background: #f3f4fc;
    color: #4355c5;
    text-align: center;
    padding: 0.3rem 0.8rem;
    border-radius: 5px;
    font-weight: 500;
  }
  .all {
    background: #4861e5 !important;
    color: #fff !important;
    padding: 0.3rem 0.8rem;
    border-radius: 5px;
    font-weight: 500;
  }
`;