import React from 'react';
import { Avatar, AvatarImage } from './Avatar.styles';
import { Image } from '../Image/Image';
export type AvatarImageProps = {
  width: string;
};

export const AvatarContainer = () => {
  return (
    <Avatar>
      <AvatarImage>
        <Image url={'portrait'} width="85%" />
      </AvatarImage>
      <AvatarImage>
        <Image url={'ellipse1'} width="92%" />
      </AvatarImage>
      <AvatarImage>
        <Image url={'ellipse2'} />
      </AvatarImage>
    </Avatar>
  );
};

export default AvatarContainer;
