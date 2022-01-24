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
  border-radius: 0 0 0 100px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-height: 600px;
  z-index: 1;
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
      min-height: 200px;

    }
    &:before {
      content: "";
      position: absolute;
      background-color: #0000;
      top: -200px;
      height: 200px;
      width: 100px;
      border-bottom-left-radius: 100px;
      box-shadow: 0 100px 0 0 #17062b;
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
