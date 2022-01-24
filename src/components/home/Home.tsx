import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Feature } from "../section/Feature";
import { Banner } from "../banner/Banner";
import "../App.scss";
import Footer from "../footer/Footer";
import styled from "@emotion/styled";

const Home = () => {

  const App = styled.div `
    text-align: center;
    overflow: hidden;
  `;

  const Content = styled.div`
  `;
  return (
    <Router>
      <App>
        <Banner
          text="adam pauw"
        />
        <Content>
          <Feature
            title="Develop"
            text={[
              "Pick a design that you feel will be a nice challenge for you at this stage",
              "We provide all the files youll need to complete the challenge. Building it is up to you",
              "Use your new project to bolster your portfolio and other such things that benefit you ",
            ]}
            image={"/img/dev1.svg"}
          />
          </Content>
          <Banner text="adam"/>
          <Content>
          <Feature
            title="Design"
            text={[
              "Create your own design tasks to challenge developers",
              "Provide all neccessary resources to the developers",
              "Collaborate with developers to learn skills",
            ]}
            image={"/img/des1.svg"}
          />
        </Content>
        <Footer />
      </App>
    </Router>
  );
};

export default Home;
