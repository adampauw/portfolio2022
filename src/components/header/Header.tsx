/* @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import NavbarMobile from "../navbar/NavbarMobile";
import { Navbar } from "../navbar/Navbar";
import { isMobile } from "../helper/deviceDetect";
import { SvgIcon } from "../helper/SVGicon";
import { css, jsx } from "@emotion/core";

export const Header = (props: any) => {
  const Header = styled.div`
    position: relative;
    background-color: #ebebeb;
    padding: 0 100px;
  `;

  const Title = styled.h1`
    color: #005351;
    margin: 100px auto 40px;
    font-size: 48px;
    line-height: 52px;
    font-weight: 600;
    text-align: center;
    width: 90%;
  `;

  return (
    <Header>
      {isMobile() ? <NavbarMobile /> : <Navbar />}
      <Title>
        Gain real world marketable experience while improving your skills
      </Title>
      <SvgIcon src='/img/stairs.svg' cssClass='header-img' stroke='none'/>
    </Header>
  );
};

export default Header;
