import React from "react";
import styled from "@emotion/styled";
import { DARK_WHITE, WHITE } from "../../Constants/Colours.constants";

interface DetailsProps {
  text: string[];
  title: string;
}

export const DetailsContainer = (props: DetailsProps) => {
  const Details = styled.div`
    webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    float: left;
    width: 33%;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
    z-index: 2;
    @media(max-width: 990px) {
      width: 100%;
    }

  `;

  const TextContainer = styled.div`
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-left: -22px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-style: solid;
    border-width: 1px;
    border-color: #0000;
    border-radius: 8px;
    -webkit-transition: all 325ms ease;
    transition: all 325ms ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
  `;

  const Text = styled.div`
    margin: 10px;
    padding: 15px;
    color: ${DARK_WHITE};
    font-size: 16px;
    line-height: 24px;
    display: flex;
    text-align: left;
    border: 1px solid #0000;
    &:hover {
      background-color: #00000012;
      border: 1px solid #0000;
      border-radius: 8px;
    }
  `;

  const Title = styled.h1`
    margin-bottom: 43px;
    color: ${WHITE};
    font-size: 42px;
    line-height: 46px;
    font-weight: 600;
    text-align: left;
    @media(max-width: 767px) {
      text-align: center;
    }
  `;

  return (
    <Details>
      <Title>{props.title}</Title>
      <TextContainer>
        {props.text.map((text) => (
          <Text>{text}</Text>
        ))}
      </TextContainer>
    </Details>
  );
};

export default DetailsContainer;
