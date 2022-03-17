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
          title="Hey! I'm Adam. A web developer based in Squamish B.C."
          text={[
            'I started as an Electrician building projects for companies like Mercedes, BMW and Amazon but after ten years I had achieved everything I wanted and started thinking, what now? I knew I enjoyed keeping Mr.Brain on his toes and after watching a friend of mine code a video game I figured this may be what Im looking for. Fast forward 4+ years and Ive been able to work at a rapidly growing startup, help rewrite entire front-ends from scratch, overhaul the UI of an intricate software, and learn and use some of the latest technologies. Recently I have been unfortunate enough to get into trail running so when Im not plugged into my computer Im in the woods or off climbing, snowboarding, hiking, and biking (rumor has it you arent allowed to live in Squamish without doing at least two of these activities)',
          ]}
        />
        <TaskContainerComponent />
      </App>
    </Router>
  );
};

export default Home;
