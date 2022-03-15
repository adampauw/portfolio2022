/* @jsx jsx */
import React from 'react';
// eslint-disable-next-line
import { jsx } from '@emotion/core';
import {
  BrowserImage,
  Cloud1,
  Cloud2,
  Element13,
  Element2,
  Element3,
  Element4,
  Element5,
  Element9,
  Plant3,
  Plant4,
  BannerImageWrapper,
} from './Banner.styles';
import { Image } from '../Image/Image';
export const BannerImage = () => {
  return (
    <BannerImageWrapper>
      <BrowserImage
        src={'https://res.cloudinary.com/butterchalk/image/upload/v1645593693/browser.png'}
      />
      <Cloud1>
        <Image url={'cloud1'} />
      </Cloud1>
      <Cloud2>
        <Image url={'cloud2'} />
      </Cloud2>
      <Element2>
        <Image url={'element2'} />
      </Element2>
      <Element3>
        <Image url={'element3'} />
      </Element3>
      <Element4>
        <Image url={'element4'} />
      </Element4>
      <Element5>
        <Image url={'element5'} />
      </Element5>
      <Element9>
        <Image url={'element9'} />
      </Element9>
      <Element13>
        <Image url={'element13'} />
      </Element13>
      <Plant3>
        <Image url={'plant3'} />
      </Plant3>
      <Plant4>
        <Image url={'plant4'} />
      </Plant4>
    </BannerImageWrapper>
  );
};

export default BannerImage;
