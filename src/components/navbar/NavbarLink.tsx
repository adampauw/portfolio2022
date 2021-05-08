import React from 'react'
import styled from '@emotion/styled'

interface NavbarLinkProps {
  text: string;
  to: string;
}

export const NavbarLink = (props: NavbarLinkProps) => {

  const Link = styled.a`
    margin: 5%;
    color: black;
    text-decoration: none;
    font-size: 2.2em;
    font-family: 'Amatic SC', cursive; 
    transition: color 2s;
    transition: border-bottom .5s;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: 0;
      left: 0;
      background: black;
      visibility: hidden;
      border-radius: 5px;
      transform: scaleX(0);
      transition: .25s linear;
    }
    &:hover:before,
    &:focus:before {
    visibility: visible;
    transform: scaleX(1);
    outline: unset;
    }
    `;

  return (
    <>
      <Link href={props.to}>
        {props.text}
      </Link>
    </>
  )
}