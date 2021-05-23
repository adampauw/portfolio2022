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
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 1300px;
  margin: 150px auto;
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
