import React from "react";
import styled from "@emotion/styled";

export const Background = () => {
  const Background = styled.div`
    background-image: url("/img/mountain-fog.jpg");
    background-size: cover;
    background-position: center;
    height: 600px;
    position: relative;
      @media (max-width: 425px) {
        height: 400px;
      }
    `

  return <Background />;
};

export default Background;