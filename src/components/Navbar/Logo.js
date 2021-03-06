/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  transitionSpeed,
  transitionFn,
  screenSmMin,
  sidebarWidth,
  sidebarMiniWidth,
  navbarHeight,
  screenHeaderCollapse,
} from '../../styles/variables';

const StyledLogo = styled.a`
  /* transitions */
  transition: width ${transitionSpeed} ${transitionFn};

  /* theme */
  background-color: ${props => props.theme.logoBgColor || '#fff'} !important;
  color: ${props => props.theme.logoColor || '#000'} !important;
  border-bottom: ${props => props.theme.logoBorderBottom || 'none'} !important;
  border-right: ${props => props.theme.navbarItemBorder || 'none'} !important;
  &:hover {
    background-color: ${props => props.theme.logoHover || '#f6f6f6'} !important;
  }

  display: block;
  text-decoration: none;
  float: left;
  height: ${navbarHeight};
  font-size: 20px;
  line-height: ${navbarHeight};
  text-align: center;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 0 15px;
  font-weight: 300;
  overflow: hidden;
  &:hover, &:focus {
    text-decoration: none !important;
    outline: none;
  }

  /* media queries */
  @media (max-width: ${screenHeaderCollapse}) {
    width: 100%;
    float: none;
    ${({ theme }) => theme.logoSmallVariant || ''}
  }
  @media (min-width: ${screenSmMin}) {
    width: ${
      ({ sidebarMini, collapse }) => ((sidebarMini && collapse) ? sidebarMiniWidth : sidebarWidth)
    };
    ${({ sidebarMini, collapse }) => ((sidebarMini && collapse) && 'padding: 0;')};
  }
`;

const LargeLogo = styled.span`
  display: block;
  @media (min-width: ${screenSmMin}) {
    display: ${({ sidebarMini, collapse }) => ((sidebarMini && collapse) ? 'none' : 'block')}
  }
`;

const SmallLogo = styled.span`
  display: none;
  @media (min-width: ${screenSmMin}) {
    display: ${({ sidebarMini, collapse }) => ((sidebarMini && collapse) ? 'block' : 'none')}
  }
`;

const Logo = ({ href = '/', onClick, logoLg, logoSm, sidebarMini, collapse }) => (
  onClick ?
    (<StyledLogo
      sidebarMini={sidebarMini}
      collapse={collapse}
      name="navbar-logo"
      onClick={onClick}
      href={null}
    >
      <LargeLogo
        sidebarMini={sidebarMini}
        collapse={collapse}
        name="navbar-logo-lg"
      >
        {logoLg}
      </LargeLogo>
      <SmallLogo
        sidebarMini={sidebarMini}
        collapse={collapse}
        name="navbar-logo-sm"
      >
        {logoSm}
      </SmallLogo>
    </StyledLogo>) :
    (<StyledLogo
      sidebarMini={sidebarMini}
      collapse={collapse}
      name="navbar-logo"
      href={href}
    >
      <LargeLogo
        sidebarMini={sidebarMini}
        collapse={collapse}
        name="navbar-logo-lg"
      >
        {logoLg}
      </LargeLogo>
      <SmallLogo
        sidebarMini={sidebarMini}
        collapse={collapse}
        name="navbar-logo-sm"
      >
        {logoSm}
      </SmallLogo>
    </StyledLogo>)
);

Logo.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  logoLg: PropTypes.element,
  logoSm: PropTypes.element,
  sidebarMini: PropTypes.bool,
  collapse: PropTypes.bool,
};

export default Logo;
