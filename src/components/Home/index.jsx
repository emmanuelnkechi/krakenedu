import React from "react";
import Header from "../Header";
import CardSection from "../Cards/CardSection";
import { StyledHome } from "./style"
import RoadMap from '../RoadMap'
import Labels from "../Labels";
import FeedbackBoard from "../FeedbackBoard"

const Home = () => {
  return (
    <StyledHome>
     <div>
        <FeedbackBoard />
        <Labels />
        <RoadMap />
      </div>
      <div>
        <Header />
        <CardSection />
      </div>
    </StyledHome>
  );
};


export default Home;