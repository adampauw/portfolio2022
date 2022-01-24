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
  -webkit-box-pack: justify;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: justify;
  justify-content: flex-end;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  ` 
  return(
    <NavbarContainer>
      <NavbarLink text="Menu" to="#"/>
    </NavbarContainer>
  )
};
