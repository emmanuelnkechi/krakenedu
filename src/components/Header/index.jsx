import React from "react";
import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <div className="suggestions-div">
        <div>
          <span>
            <i className="fa fa-user"></i>
          </span>
          <span className="suggestions">6 Suggestions</span>
        </div>
        <div>
          <span className="sort-by">sort by : </span>
          <span className="rates">
            Most Upvotes{" "}
            <span>
              <i className="fa fa-angle-down"></i>
            </span>
          </span>
        </div>
      </div>
      <div className="add-btn">
        <button>+ Add Feedback</button>
      </div>
    </StyledHeader>
  );
};

export default Header;
