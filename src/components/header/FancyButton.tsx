import React from "react";

import "./FancyButton.scss"

export const FancyButton = () => {
  return (
  <button className="button">
    Blog
    <div className="button__horizontal"></div>
    <div className="button__vertical"></div>
  </button>
  );
};

export default FancyButton;