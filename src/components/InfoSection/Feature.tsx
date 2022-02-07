/** @jsx jsx */
import VisualContainer from './Avatar';
import styled from '@emotion/styled';
import DetailsContainer from './Details';
import { DARK_WHITE, PURPLE } from '../../Constants/Colours.constants';
import { css, jsx } from '@emotion/core';

interface FeatureProps {
  title: string;
  text: string[];
  mirror?: boolean;
}

export const Feature = (props: FeatureProps) => {

  const FeatureContainer = styled.div`
  background-color: ${PURPLE};
  position: relative;
  border-radius: 0 0 0 100px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  z-index: 1;
  padding-bottom: 50px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
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

  const Feature = styled.div`
    display: flex;
    margin: 30px 0;
    flex-direction: row;
    justify-content: space-around;
  `;

  const Languages = styled.div`
    color: ${DARK_WHITE};
    margin: 0 5%;
    font-size: 22px;
  `;

  return (
    <FeatureContainer id='about'>
      <div css={css`margin: 0 20px;`}>
        <Feature>
          <DetailsContainer title={props.title} text={props.text}/>
          <VisualContainer/>
        </Feature>
        <Languages>
          React | Typescript | Javascript | Redux | Mobx | MaterialUI | EmotionJs | Scss | Kubernetes | REST | Jest | Enzyme
        </Languages>
      </div>
    </FeatureContainer>
  );
}
