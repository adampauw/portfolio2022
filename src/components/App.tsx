import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import TaskContainer from "./tasks/TaskContainer";
import Home from "./Home/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/tasks" component={TaskContainer} />
      </Switch>
    </Router>
  );
};

export default App;
