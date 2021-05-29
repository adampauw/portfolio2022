import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom';

interface NavbarLinkProps {
  text: string;
  to: string;
}

export const NavbarLink = (props: NavbarLinkProps) => {

  const Linker = styled(Link)`
    color: #005351;
    text-decoration: none;
    font-size: 14px;
    line-Height: 20px;
    font-family: Velasans0,Arial,sans-serif; 
    transition: color 2s;
    transition: border-bottom .5s;
    position: relative;
    padding: 10px 15px;
    border-style: solid;
    border-width: 1px;
    border-color: #009b8a80;
    border-radius: 4px;
    &:hover,
    &:focus {
      background-color: #009b8a;
      color: #fff;
    }
    `;

  return (
    <>
      <Linker to={props.to}>
        {props.text}
      </Linker>
    </>
  )
}