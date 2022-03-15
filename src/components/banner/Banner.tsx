/* @jsx jsx */
import React from 'react';
// eslint-disable-next-line
import { jsx } from '@emotion/core';
import { BannerImage } from './BannerImage';
import { Navbar } from '../Navbar/Navbar';
import { BannerWrapper, Title } from './Banner.styles';

interface BannerProps {
  text: string;
}

export const Banner = (props: BannerProps) => {
  return (
    <BannerWrapper id="banner">
      <Navbar />
      <Title>{props.text}</Title>
      <BannerImage />
    </BannerWrapper>
  );
};

export default Banner;
