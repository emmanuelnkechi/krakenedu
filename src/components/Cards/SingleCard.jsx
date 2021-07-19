import React from "react";
import { StyledCard } from "./style";

const SingleCard = ({ card }) => {
  const { number, title, paragraph, labels, comments } = card;
  return (
    <StyledCard>
      <div className="card-section">
        <div>
          <div className="caret-div">
            <div>
              <i className="fa fa-angle-up"></i>
            </div>
            <div className="num">{number}</div>
          </div>
          <div>
            <h3>{title}</h3>
            <p className="para">{paragraph}</p>
            <div className="enhancement-div">
              <span className="enhancement">{labels}</span>
            </div>
          </div>
        </div>
        <div>
          <span>
            <i className="fa fa-comment"></i>
          </span>
          <span className="comments">{comments}</span>
        </div>
      </div>
    </StyledCard>
  );
};

export default SingleCard;
