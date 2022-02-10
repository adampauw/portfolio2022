/** @jsx jsx */
import VisualContainer from './Avatar';
import DetailsContainer from './Details';
import { css, jsx } from '@emotion/core';
import { Feature, FeatureContainer, Languages } from './Feature.styles';

interface FeatureProps {
  title: string;
  text: string[];
  mirror?: boolean;
}

export const FeatureComponent = (props: FeatureProps) => {
  return (
    <FeatureContainer id="about">
      <div
        css={css`
          margin: 0 20px;
        `}>
        <Feature>
          <DetailsContainer title={props.title} text={props.text} />
          <VisualContainer />
        </Feature>
        <Languages>
          React | Typescript | Javascript | Redux | Mobx | MaterialUI | EmotionJs | Scss |
          Kubernetes | REST | Jest | Enzyme
        </Languages>
      </div>
    </FeatureContainer>
  );
};
