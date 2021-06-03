import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import TaskContainer from "./tasks/TaskContainer";
import Home from "./home/Home";
import { Navbar } from "./navbar/Navbar";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/tasks" component={TaskContainer} />
      </Switch>
    </Router>
  );
};

export default App;
