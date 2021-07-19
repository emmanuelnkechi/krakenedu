import React from "react";
import { StyledMap } from "./stlye";

const RoadMap = () => {
  return (
    <StyledMap>
      <div className="roadmap">
        <div className="roadmap-list">
          <h3>Roadmap</h3>
          <div>
            <p className="orange"></p> <p>Planned</p>
          </div>
          <div>
            <p className="purple"></p> <p>In-Progress</p>
          </div>
          <div>
            <p className="blue"></p> <p>Live</p>
          </div>
        </div>
        <div className="views">
          <div>
            {" "}
            <a href="views">View</a>
          </div>
          <p>2</p>
          <p>3</p>
          <p>1</p>
        </div>
      </div>
    </StyledMap>
  );
};

export default RoadMap;
