/* @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";
import { SvgIcon } from "../helper/SVGicon";

export const Footer = (props: any) => {
  const Footer = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 60px;
    padding: 80px 60px 60px;
    border-radius: 8px;
    background-image: linear-gradient(127deg,#00aa9b,#008b78);
  `;

  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  `;

  const Title = styled.h1`
    color: white;
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

  return (
    <Footer>
      <TextContainer>
      <Title>
        Still need some help?
      </Title>
      <Text href="#">
        Sign-up
      </Text>
      <Text href="#">
        Contact
      </Text>
      <Text href="#">
        FAQ
      </Text>
      </TextContainer>
      <SvgIcon src='/img/team.svg' stroke='none'/>
    </Footer>
  );
};

export default Footer;
