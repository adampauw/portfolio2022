import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Feature } from "../section/Feature";
import Header from "../header/Header";
import "../App.scss";
import Footer from "../footer/Footer";

const Home: React.FC = () => {

  return (
    <Router>
    <div className="App">
      <Header />
      <div className="Content">
        <Feature 
          title='Develop'
          text={[ 
          'Pick a design that you feel will be a nice challenge for you at this stage',
          'We provide all the files youll need to complete the challenge. Building it is up to you',
          'Use your new project to bolster your portfolio and other such things that benefit you ' 
        ]} 
          image={"/img/dev1.svg"}
        />
        <Feature 
          title='Design'
          text={[ 
            'Create your own design tasks to challenge developers',
            'Provide all neccessary resources to the developers',
            'Collaborate with developers to learn skills' 
          ]} 
          image={"/img/des1.svg"}
          mirror={true}
        />
        <Footer/>
      </div>
    </div>
    </Router>
  );
};

export default Home;
