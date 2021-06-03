/* @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import { SvgIcon } from "../../helpers/SVGicon";
// eslint-disable-next-line
import { jsx } from "@emotion/core";

interface HeaderProps {
  text: string;
  img: string;
}

export const Header = (props: HeaderProps) => {
  const Header = styled.div`
    position: relative;
    background-color: #ebebeb;
    padding: 0 60px;
    @media (max-width: 767px) {
      padding 30px 15px;
      background-image: url(${props.img});
      background-position: right;
    }
  `;

  const Title = styled.h1`
    color: #005351;
    margin: 0 auto 40px;
    padding-top: 50px;
    font-size: 48px;
    line-height: 52px;
    font-weight: 600;
    text-align: center;
    width: 90%;
    @media (max-width: 767px) {
      font-size: 35px;
      margin: 70px auto 40px;
    }
  `;

  return (
    <Header>
      <Title>
        {props.text}
      </Title>
        <SvgIcon src={props.img} cssClass="header-img clear-mobile" stroke="none" />
    </Header>
  );
};

export default Header;
