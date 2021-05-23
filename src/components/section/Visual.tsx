import React from "react";
import styled from "@emotion/styled";

interface VisualProps {
  image: string;
}

export const VisualContainer = (props: VisualProps) => {

  const Visual = styled.div`
    position: relative;
    padding-right: 60px;
    padding-left: 60px;    
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 50%;
    & > img {
      width: 100%;
    }
    @media(max-width: 990px) {
      position: absolute;
      padding: 10px;
      opacity: .1;
      z-index: -1;
      width: 80%;
    }

  `;

  return (
    <Visual>
      <img src={props.image}/>
    </Visual>
  );
}

export default VisualContainer
