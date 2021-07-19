import React from "react";
import { StyledLabels } from "./style";

const Labels = () => {
  return (
    <StyledLabels>
      <div className="labels-div">
        <div>
          <div className="all">All</div>
          <div>UI</div>
          <div>UX</div>
        </div>
        <div>
          <div>Enhancement</div>
          <div>Bug</div>
        </div>
        <div>
          <div>Feature</div>
        </div>
      </div>
    </StyledLabels>
  );
};

export default Labels;
