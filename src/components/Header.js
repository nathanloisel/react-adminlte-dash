/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Navbar from './Navbar/Navbar';
import Logo from './Navbar/Logo';
import UserMenu from './Navbar/UserMenu';
import NavItem from './Navbar/NavItem';

const StyledHeader = styled.header`
  /* clearfix */
  &:before, &:after {
    display: table;
    content: " ";
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  &:after {
    clear: both;
  }

  position: ${({ fixed }) => (fixed ? 'fixed' : 'relative')};
  width: ${({ boxed }) => (boxed ? '1024px' : '100%')};
  max-height: 100px;
  z-index: 1030;

  /* theme */
  ${({ theme }) => theme.headerBoxShadow && `
    -webkit-box-shadow: ${theme.headerBoxShadow};
    box-shadow: ${theme.headerBoxShadow};
  `}
`;

const Header = ({
  fixed,
  sidebarCollapse,
  sidebarMini,
  logoOnClick,
  logoHref,
  logoLg,
  logoSm,
  sidebarToggle,
  sidebarToggleIcon,
  children,
  }) => (
    <StyledHeader fixed={fixed} >
      <Logo
        collapse={sidebarCollapse}
        sidebarMini={sidebarMini}
        onClick={logoOnClick}
        href={logoHref}
        logoLg={logoLg}
        logoSm={logoSm}
      />
      <Navbar
        toggle={sidebarToggle}
        toggleIcon={sidebarToggleIcon}
        collapse={sidebarCollapse}
        sidebarMini={sidebarMini}
      >
        {children}
      </Navbar>
    </StyledHeader>
);

Header.propTypes = {
  children: PropTypes.node,
  fixed: PropTypes.bool,
  logoOnClick: PropTypes.func,
  logoHref: PropTypes.string,
  logoLg: PropTypes.element,
  logoSm: PropTypes.element,
  sidebarMini: PropTypes.bool,
  sidebarCollapse: PropTypes.bool,
  sidebarToggle: PropTypes.func.isRequired,
  sidebarToggleIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Header.defaultProps = {
  fixed: false,
  sidebarMini: false,
  sidebarCollapse: false,
  logoLg: <span><b>Admin</b>LTE</span>,
  logoSm: <span><b>A</b>LT</span>,
};

Header.UserMenu = UserMenu;
Header.Item = NavItem;

export default Header;
