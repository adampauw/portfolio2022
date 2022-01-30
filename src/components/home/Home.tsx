import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Feature } from "../section/Feature";
import { Banner } from "../banner/Banner";
import "../App.scss";
import styled from "@emotion/styled";
import TaskContainer from "../tasks/TaskContainer";

const Home = () => {

  const App = styled.div `
    text-align: center;
    overflow: hidden;
  `;

  return (
    <Router>
      <App>
        <Banner
          text="adam pauw"
        />
          <Feature
            title="Hey! I'm Adam. A web developer based in Squamish"
            text={[
              "Since 2018 I have been working as a Frontend Developer and before that I was an Electrical Foreman managing jobs for companys like Amazon and Mercedes until one day I started wishing I had more complex problems to solve. My very first day as a developer I spent an hour trying to fix an issue which in the end was just a missing semi-colon and after the rage drained from my eyes I really felt I'd chosen the right career",
            ]}
          />
          <TaskContainer />
      </App>
    </Router>
  );
};

export default Home;
