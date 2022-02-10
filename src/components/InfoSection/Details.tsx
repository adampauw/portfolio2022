import React from 'react';
import { Details, TextContainer, Title, Text } from './Details.styles';

interface DetailsProps {
  text: string[];
  title?: string;
}

export const DetailsContainer = (props: DetailsProps) => {
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
