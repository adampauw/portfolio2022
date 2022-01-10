import React from 'react'
import VisualContainer from './Visual';
import styled from '@emotion/styled';
import DetailsContainer from './Details';

interface FeatureProps {
  title: string;
  text: string[];
  image: string;
  mirror?: boolean;
}

export const Feature = (props: FeatureProps) => {

  const FeatureContainer = styled.div`
  background-color: #17062B;
  position: relative;
  border-radius: 0 250px 250px 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 1300px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: ${props.mirror ? 'row-reverse' : 'row'};
  -ms-flex-direction: ${props.mirror ? 'row-reverse' : 'row'};
  flex-direction: ${props.mirror ? 'row-reverse' : 'row'};
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
    @media(max-width: 767px) {
      margin-top: 30px;
      padding-right: 10px;
      padding-left: 10px;
    }
    &:before {
      content: "";
      position: absolute;
      background-color: #0000;
      bottom: -600px;
      height: 600px;
      width: 250px;
      border-top-left-radius: 250px;
      box-shadow: 0 -250px 0 0 #17062b;
      z-index: 1;
}
    &:after {
      content: "";
      position: absolute;
      background-color: #0000;
      top: -600px;
      height: 600px;
      width: 250px;
      border-bottom-left-radius: 250px;
      box-shadow: 0 250px 0 0 #17062b;
      z-index: 1;
}
  `

  return (
    <>
    <FeatureContainer>
      <DetailsContainer title={props.title} text={props.text}/>
      <VisualContainer image={props.image} />
    </FeatureContainer>
    </>
  );
}
