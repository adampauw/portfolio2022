/* @jsx jsx */
import React from 'react';
// eslint-disable-next-line
import { jsx } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FooterWrapper, Link, TextContainer, Text, Plant } from './Footer.styles';
import { Image } from '../Image/Image';

export const Footer = (props: any) => {
  return (
    <FooterWrapper>
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
      <Plant>
        <Image url={'plant2'} />
      </Plant>
    </FooterWrapper>
  );
};

export default Footer;
