/* @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
// eslint-disable-next-line
import { jsx } from '@emotion/core';
import Plant2 from '../../Assets/Images/plant2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { DARK_WHITE, WHITE } from '../../Constants/Colours.constants';

export const Footer = (props: any) => {
  const Footer = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 55px;
    padding: 40px 60px;
    border-radius: 8px 8px 8px 100px;
    background-color: #17062b;
    @media (max-width: 767px) {
      margin: 5px;
      padding: 30px 40px;
      justify-content: center;
    }
  `;

  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
  `;

  const Link = styled.a`
    margin-top: 16px;
    color: ${WHITE};
    font-size: 20px;
    line-height: 22px;
    font-weight: 300;
    text-decoration: none;
    &:hover {
      color: ${DARK_WHITE};
    }
  `;

  const Text = styled.span`
    padding-left: 10px;
  `;

  const Image = styled.img`
    width: 25%;
    object-fit: scale-down;
    -webkit-animation: pop 5s ease-in-out infinite;
    -moz-animation: pop 5s ease-in-out infinite;
    -ms-animation: pop 5s ease-in-out infinite;
    -o-animation: pop 5s ease-in-out infinite;
    animation: pop 5s ease-in-out infinite;
    @keyframes pop {
      3% {
        transform: scale(105%);
      }
      6% {
        transform: scale(105%);
      }
      9% {
        transform: scale(100%);
      }
    }
    @media (max-width: 767px) {
      display: none;
    }
  `;

  return (
    <Footer>
      <TextContainer>
        <Link href="https://www.linkedin.com/in/adampauw/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
          <Text>LinkedIn</Text>
        </Link>
        <Link href="https://github.com/adampauw" target="_blank">
          <FontAwesomeIcon icon={faGithubAlt} />
          <Text>Github</Text>
        </Link>
        <Link href="mailto:adampauw@gmail.com">
          <FontAwesomeIcon icon={faPaperPlane} />
          <Text>Email</Text>
        </Link>
      </TextContainer>
      <Image src={Plant2} />
    </Footer>
  );
};

export default Footer;
