/* @jsx jsx */
import React from 'react';
// eslint-disable-next-line
import { jsx } from '@emotion/core';
import Plant2 from '../../Assets/Images/plant2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FooterWrapper, Link, TextContainer, Text, Image } from './Footer.styles';

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
      <Image src={Plant2} />
    </FooterWrapper>
  );
};

export default Footer;
