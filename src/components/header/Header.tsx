/* @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import { Navbar } from "../navbar/Navbar";
import { SvgIcon } from "../helper/SVGicon";
import { css, jsx } from "@emotion/core";

export const Header = (props: any) => {
  const Header = styled.div`
    position: relative;
    background-color: #ebebeb;
    padding: 0 60px;
    @media (max-width: 767px) {
      padding 30px 15px;
      background-image: url(/img/stairs.svg);
      background-position: unset;
    }
  `;

  const Title = styled.h1`
    color: #005351;
    margin: 100px auto 40px;
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
      <Navbar />
      <Title>
        Gain real world experience while improving your skills
      </Title>
        <SvgIcon src="/img/stairs.svg" cssClass="header-img clear-mobile" stroke="none" />
    </Header>
  );
};

export default Header;
