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
            'I started out as an Electrician building projects for companies like Mercedes, BMW and Amazon but after ten years I had achieved everything I wanted and started thinking, what now? I knew I enjoyed keeping Mr.Brain on his toes and after watching a friend of mine code a video game I figured this may be what im looking for',
            "Fast forward 4+ years and I've been able to work at a rapidly growing start up, help rewrite entire front-ends from scratch, overhaul the UI of a complex project, and learn and use some of the latest technologies",
            "Recently I have been unfortunate enough to get into trail running so when im not plugged into my computer I'm in the woods or off climbing, snowboarding, hiking and biking (rumour has it you arent allowed to live in Squamish without doing at least two of the these activities)",
          ]}
        />
        <TaskContainerComponent />
      </App>
    </Router>
  );
};

export default Home;
