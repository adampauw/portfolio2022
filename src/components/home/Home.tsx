import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FeatureComponent } from '../InfoSection/Feature';
import { Banner } from '../Banner/Banner';
import '../App.scss';
import TaskContainerComponent from '../tasks/TaskContainer';
import { App } from './Home.styles';

const Home = () => {
  return (
    <Router>
      <App>
        <Banner text="adam pauw" />
        <FeatureComponent
          title="Hey! I'm Adam. A web developer based in Squamish"
          text={[
            "Since 2018 I have been working as a Frontend Developer and before that I was an Electrical Foreman managing jobs for companys like Amazon and Mercedes until one day I started wishing I had more complex problems to solve. My very first day as a developer I spent an hour trying to fix an issue which in the end was just a missing semi-colon and after the rage drained from my eyes I really felt I'd chosen the right career",
          ]}
        />
        <TaskContainerComponent />
      </App>
    </Router>
  );
};

export default Home;
