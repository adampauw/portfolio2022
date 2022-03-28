/** @jsx jsx */
import { jsx } from '@emotion/react';

import React from 'react';
import { StyledImage, StyledTaskImage } from './Image.styles';

interface ImageProps {
  url: string;
  width?: string;
  child?: boolean;
}
export const Image = (props: ImageProps) => {
  return props.child ? (
    <StyledTaskImage
      src={`https://res.cloudinary.com/butterchalk/image/upload/v1645593693/${props.url}.png`}
    />
  ) : (
    <StyledImage
      src={`https://res.cloudinary.com/butterchalk/image/upload/v1645593693/${props.url}.png`}
      width={props.width || '100%'}
    />
  );
};
