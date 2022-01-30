/* @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
// eslint-disable-next-line
import { jsx } from "@emotion/core";
import Plant2 from "../../assets/images/plant2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'



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
    @media(max-width: 767px) {
      margin: 5px;
      padding: 30px 40px;
    }
  `;

  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
  `;

  const Text = styled.a`
  margin-top: 16px;
  color: #ffffff78;
  font-size: 16px;
  line-height: 22px;
  font-weight: 300;
  text-decoration: none;
  &:hover {
    color: white;
  }
  `;

  const Image = styled.img`
    width: 25%;
    object-fit: scale-down;
    -webkit-animation: pop 10s ease-in-out infinite;
    -moz-animation: pop 10s ease-in-out infinite;
    -ms-animation: pop 10s ease-in-out infinite;
    -o-animation: pop 10s ease-in-out infinite;
    animation: pop 10s ease-in-out infinite;
    @keyframes pop {
        3% { transform: scale(105%); }
        6% { transform: scale(105%); }
        9% { transform: scale(100%); }
    }
  `;

  return (
    <Footer>
      <TextContainer>
      <Text href="https://www.linkedin.com/in/adampauw/" target="_blank">
      <FontAwesomeIcon icon={faLinkedin}/>
        LinkedIn
      </Text>
      <Text href="https://github.com/adampauw" target="_blank">
        Github
      </Text >
      <Text href="mailto:adampauw@gmail.com">
        Email
      </Text>
      </TextContainer>
      <Image 
        src={Plant2}
      />
    </Footer>
  );
};

export default Footer;
