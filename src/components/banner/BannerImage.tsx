/* @jsx jsx */
import React from 'react';
// eslint-disable-next-line
import { jsx } from '@emotion/core';
import Browser from '../../Assets/Images/browser.png';
import Cloud_1 from '../../Assets/Images/cloud1.png';
import Cloud_2 from '../../Assets/Images/cloud2.png';
import Element_3 from '../../Assets/Images/element3.png';
import Element_2 from '../../Assets/Images/element2.png';
import Element_4 from '../../Assets/Images/element4.png';
import Element_5 from '../../Assets/Images/element5.png';
import Element_9 from '../../Assets/Images/element9.png';
import Element_13 from '../../Assets/Images/element13.png';
import Plant_3 from '../../Assets/Images/plant3.png';
import Plant_4 from '../../Assets/Images/plant4.png';
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
  Image,
  BannerImageWrapper,
} from './BannerImage.styles';

export const BannerImage = () => {
  return (
    <BannerImageWrapper>
      <BrowserImage src={Browser} />
      <Cloud1>
        <Image src={Cloud_1} />
      </Cloud1>
      <Cloud2>
        <Image src={Cloud_2} />
      </Cloud2>
      <Element2>
        <Image src={Element_2} />
      </Element2>
      <Element3>
        <Image src={Element_3} />
      </Element3>
      <Element4>
        <Image src={Element_4} />
      </Element4>
      <Element5>
        <Image src={Element_5} />
      </Element5>
      <Element9>
        <Image src={Element_9} />
      </Element9>
      <Element13>
        <Image src={Element_13} />
      </Element13>
      <Plant3>
        <Image src={Plant_3} />
      </Plant3>
      <Plant4>
        <Image src={Plant_4} />
      </Plant4>
    </BannerImageWrapper>
  );
};

export default BannerImage;
