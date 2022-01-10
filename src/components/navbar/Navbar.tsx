import React,{FC} from 'react'
import { NavbarLink } from './NavbarLink';
import styled from '@emotion/styled';


export const Navbar: FC = (props: any) => {

  const NavbarContainer = styled.div `
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  padding: 20px 15px 0;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #ebebeb;
  ` 
  return(
    <NavbarContainer>
      <NavbarLink text="Home" to="/"/>
      <NavbarLink text="Work" to="/tasks"/>
    </NavbarContainer>
  )
};
