import React from 'react';
import { StyledImage } from './Image.styles';

interface ImageProps {
  url: string;
  width?: string;
}
export const Image = (props: ImageProps) => {
  return (
    <StyledImage
      src={`https://res.cloudinary.com/butterchalk/image/upload/v1645593693/${props.url}.png`}
      width={props.width || '100%'}
    />
  );
};
