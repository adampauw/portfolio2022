import React from "react";
import styled from "@emotion/styled";
import Profile from "../../Assets/Images/adam-portrait.jpg"

export const VisualContainer = () => {

  const Visual = styled.div`
    display: flex;
    position: relative;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    justify-content: center;
    width: 25%;
    & > img {
      width: 100%;
      border-radius: 50%;
      border: 11px double #fff;
      padding: 15px;
    }
    @media(max-width: 767px) {
      display: none;
    }
    @media(min-width: 2560px) {
      width: 20%;
    }

  `;

  return (
    <Visual>
      <img src={Profile} alt='' />
    </Visual>
  );
}

export default VisualContainer
