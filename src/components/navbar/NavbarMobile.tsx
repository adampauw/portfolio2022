import React, { FC } from 'react'
import './NavbarMobile.scss'
import styled from '@emotion/styled';
import { NavbarLink } from './NavbarLink';


export const MobileNav: FC = () => {

  const NavigationContainer = styled.nav`
    width: 100%;
    position: absolute;
  `

  return (
    <NavigationContainer role="navigation">
      <div className="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul className="menu">
          <NavbarLink text="Blog" to="#" />
          <NavbarLink text="About" to="#" />
          <NavbarLink text="Contact" to="#" />
        </ul>
      </div>
    </NavigationContainer>
  );
};

export default MobileNav;
