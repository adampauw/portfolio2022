/** @jsx jsx */
import React, { FC } from 'react';
import { css, jsx } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faIgloo, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { Link, LinkContent } from './Navbar.styles';

export const Navbar: FC = (props: any) => {
  return (
    <React.Fragment>
      <Link href="#banner">
        <LinkContent
          css={css`
            top: 20px;
            @media (max-width: 767px) {
              top: 120px;
            }
          `}>
          <FontAwesomeIcon icon={faIgloo} />
          Home
        </LinkContent>
      </Link>
      <Link href="#about">
        <LinkContent
          css={css`
            top: 80px;
            @media (max-width: 767px) {
              top: 180px;
            }
          `}>
          <FontAwesomeIcon icon={faUserAstronaut} />
          About
        </LinkContent>
      </Link>
      <Link href="#work">
        <LinkContent
          css={css`
            top: 140px;
            @media (max-width: 767px) {
              top: 240px;
            }
          `}>
          <FontAwesomeIcon icon={faCode} />
          Work
        </LinkContent>
      </Link>
    </React.Fragment>
  );
};
