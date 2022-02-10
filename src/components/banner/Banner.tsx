/* @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
// eslint-disable-next-line
import { jsx } from '@emotion/core';
import { WHITE } from '../../Constants/Colours.constants';
import { BannerImage } from './BannerImage';
import { Navbar } from '../Navbar/Navbar';

interface BannerProps {
  text: string;
}

export const Banner = (props: BannerProps) => {
  const Banner = styled.div`
    width: 100%;
    position: relative;
    background: linear-gradient(149deg, #967baf 0%, #d5c2cd 40%);
    padding: 0 60px;
    margin: -100px 0 -100px 0;
    padding: 100px 0;
    @media (max-width: 767px) {
      background-position: right;
    }
  `;

  const Title = styled.h1`
    color: ${WHITE};
    margin: 0 auto 40px;
    padding-top: 50px;
    font-size: 80px;
    font-family: 'Monoton', cursive;
    @media (max-width: 767px) {
      font-size: 65px;
      -webkit-animation: pop 5s ease-in-out infinite;
      -moz-animation: pop 5s ease-in-out infinite;
      -ms-animation: pop 5s ease-in-out infinite;
      -o-animation: pop 5s ease-in-out infinite;
      animation: pop 5s ease-in-out infinite;
      @keyframes pop {
        3% {
          transform: scale(105%);
        }
        9% {
          transform: scale(105%);
        }
        12% {
          transform: scale(100%);
        }
      }
    }
  `;

  return (
    <Banner id="banner">
      <Navbar />
      <Title>{props.text}</Title>
      <BannerImage />
    </Banner>
  );
};

export default Banner;
