import React from 'react';
import Profile from '../../Assets/Images/portrait.png';
import Ellipse1 from '../../Assets/Images/ellipse1.png';
import Ellipse2 from '../../Assets/Images/ellipse2.png';
import { Avatar, AvatarImage } from './Avatar.styles';
export type AvatarImageProps = {
  width: string;
};

export const AvatarContainer = () => {
  return (
    <Avatar>
      <AvatarImage src={Profile} width="85%" />
      <AvatarImage src={Ellipse1} width="92%" />
      <AvatarImage src={Ellipse2} width="100%" />
    </Avatar>
  );
};

export default AvatarContainer;
