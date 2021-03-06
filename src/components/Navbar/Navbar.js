/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ToggleButton from './ToggleButton';

import {
  transitionSpeed,
  transitionFn,
  screenSmMin,
  sidebarWidth,
  sidebarMiniWidth,
  navbarHeight,
  screenHeaderCollapse,
} from '../../styles/variables';

const StyledNavbarMenuList = styled.ul`
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0px;
  margin-right: 0px;
  padding-left: 40px;
  box-sizing: border-box;
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;

  /* media queries */
  @media (max-width: ${screenHeaderCollapse}) {
    float: left;
  }
  @media (min-width: ${screenSmMin}) {
    float: right;
  }
`;

const StyledNavbarMenu = styled.div`
  box-sizing: border-box;
  display: block;
  float: right;
`;

const StyledNavbar = styled.nav`
  /* clearfix */
  &:before, &:after {
    display: table;
    content: " ";
    box-sizing: border-box;
  }
  &:after {
    clear: both;
  }

  /* transitions */
  transition: margin-left ${transitionSpeed} ${transitionFn};

  color: ${({ theme }) => theme.navbarFontColor || '#333'};
  display: block;
  font-weight: 400;
  position: relative;
  min-height: ${navbarHeight};
  z-index: 1000;
  margin-bottom: 0;
  margin-left: ${({ topNav }) => (topNav ? '0' : sidebarWidth)};
  border: none;
  border-radius: 0;
  background-color: ${({ theme }) => theme.backgroundColor || '#fff'};

  /* media queries */
  @media (max-width: ${screenHeaderCollapse}) {
    width: 100%;
    float: none;
    margin: 0;
  }
  @media (min-width: ${screenSmMin}) {
    margin-left: ${({ topNav, sidebarMini, collapse }) => ((!topNav && sidebarMini && collapse) ?
      sidebarMiniWidth :
      sidebarWidth)};
  }
`;

const NoPaddingToggleButton = styled(ToggleButton)`
  padding: 0;
  display: flex;
  justify-items: center;
  align-items: center;
  width:  ${navbarHeight};
  height: ${navbarHeight};
  overflow:hidden;
  ::before {
    padding: 15px;
  }
  > * {
    margin: auto;
  }
  :active::before, :active > * {
    transition: scale ease-in-out 150ms;
    transform: scale(0.8);
  }
`;


function getToggleButton(toggle, toggleIcon) {
  if (typeof toggleIcon !== 'undefined') {
    if (typeof toggleIcon !== 'string') {
      return (
        <NoPaddingToggleButton
          name="sidebar-toggle"
          onClick={toggle}
        >
          {toggleIcon}
        </NoPaddingToggleButton>
      );
    } else if (typeof toggleIcon === 'string') {
      return (
        <NoPaddingToggleButton
          name="sidebar-toggle"
          className={toggleIcon}
          onClick={toggle}
        />
      );
    }
  }
  return <NoPaddingToggleButton name="sidebar-toggle" className="fa fa-bars" onClick={toggle} />;
}

const Navbar = ({ topNav, sidebarMini, collapse, toggle, children, toggleIcon }) => (
  <StyledNavbar
    topNav={topNav}
    sidebarMini={sidebarMini}
    collapse={collapse}
  >
    {getToggleButton(toggle, toggleIcon)}

    <StyledNavbarMenu>
      <StyledNavbarMenuList name="navbar-menu-wrapper">
        {children}
      </StyledNavbarMenuList>
    </StyledNavbarMenu>
  </StyledNavbar>
);

Navbar.propTypes = {
  children: PropTypes.node,
  toggle: PropTypes.func.isRequired,
  topNav: PropTypes.bool,
  sidebarMini: PropTypes.bool,
  collapse: PropTypes.bool,
  toggleIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Navbar;
