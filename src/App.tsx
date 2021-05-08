import React from "react";
import styled from "@emotion/styled";

import { Blog } from "./components/blog/Blog";
import "./App.scss";
import Header from "./components/header/Header";


const App: React.FC = () => {

  return (
    <div className="App">
      <Header />
      <div className="Content">
        <Blog />
      </div>
    </div>
  );
};

export default App;
