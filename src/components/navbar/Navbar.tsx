/** @jsx jsx */
import React, {FC} from 'react'
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faIgloo, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';


export const Navbar: FC = (props: any) => {

  const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2px;
  `;

  const LinkContent = styled.div `
  display: flex;
  align-items: center;
  padding-left: 15px;
  justify-content: flex-start;
  background-color: #ffffff;
  color: #2c3e50;
  border: none;
  border-radius: 30px;
  width: 100px;
  height: 40px;
  line-height: 40px;
  position: fixed;
  right: -55px;
  transition: .7s ease;
  z-index: 100;
  @media(min-width: 767px) {
    &:hover {
      background-color: #ffffff;
      position: fixed;
      right: -50px;
      width: 200px;
    }
  }
  @media(max-width: 767px) {
    position: absolute;
    &:active {
    }
  }
  svg {
    font-size: 20px;
    margin-right: 15%;
  }
  ` 

  return(
    <React.Fragment>
      <Link href='#'>
        <LinkContent css={css`top: 20px; @media (max-width: 767px) {top: 120px;}`}><FontAwesomeIcon icon={faIgloo}/>Home</LinkContent>
      </Link>
      <Link href='##'>
        <LinkContent css={css`top: 80px; @media (max-width: 767px) {top: 180px;}`}><FontAwesomeIcon icon={faUserAstronaut}/>About</LinkContent>
      </Link>
      <Link href='###'>
        <LinkContent css={css`top: 140px; @media (max-width: 767px) {top: 240px;}`}><FontAwesomeIcon icon={faCode}/>Work</LinkContent>
      </Link>
    </React.Fragment>
  )
};
