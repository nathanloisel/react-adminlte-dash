var _templateObject = _taggedTemplateLiteral(['\n  -webkit-margin-before: 1em;\n  -webkit-margin-after: 1em;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 40px;\n  box-sizing: border-box;\n  display: block;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  /* media queries */\n  @media (max-width: ', ') {\n    float: left;\n  }\n  @media (min-width: ', ') {\n    float: right;\n  }\n'], ['\n  -webkit-margin-before: 1em;\n  -webkit-margin-after: 1em;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 40px;\n  box-sizing: border-box;\n  display: block;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  /* media queries */\n  @media (max-width: ', ') {\n    float: left;\n  }\n  @media (min-width: ', ') {\n    float: right;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  display: block;\n  float: right;\n'], ['\n  box-sizing: border-box;\n  display: block;\n  float: right;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* transitions */\n  -webkit-transition: margin-left ', ' ', ';\n  -o-transition: margin-left ', ' ', ';\n  transition: margin-left ', ' ', ';\n\n  color: ', ';\n  display: block;\n  font-weight: 400;\n  position: relative;\n  min-height: ', ';\n  z-index: 1000;\n  margin-bottom: 0;\n  margin-left: ', ';\n  border: none;\n  border-radius: 0;\n  background-color: ', ';\n\n  /* media queries */\n  @media (max-width: ', ') {\n    width: 100%;\n    float: none;\n    margin: 0;\n  }\n  @media (min-width: ', ') {\n    margin-left: ', ';\n  }\n'], ['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* transitions */\n  -webkit-transition: margin-left ', ' ', ';\n  -o-transition: margin-left ', ' ', ';\n  transition: margin-left ', ' ', ';\n\n  color: ', ';\n  display: block;\n  font-weight: 400;\n  position: relative;\n  min-height: ', ';\n  z-index: 1000;\n  margin-bottom: 0;\n  margin-left: ', ';\n  border: none;\n  border-radius: 0;\n  background-color: ', ';\n\n  /* media queries */\n  @media (max-width: ', ') {\n    width: 100%;\n    float: none;\n    margin: 0;\n  }\n  @media (min-width: ', ') {\n    margin-left: ', ';\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ToggleButton from './ToggleButton';

import { transitionSpeed, transitionFn, screenSmMin, sidebarWidth, sidebarMiniWidth, navbarHeight, screenHeaderCollapse } from '../../styles/variables';

var StyledNavbarMenuList = styled.ul(_templateObject, screenHeaderCollapse, screenSmMin);

var StyledNavbarMenu = styled.div(_templateObject2);

var StyledNavbar = styled.nav(_templateObject3, transitionSpeed, transitionFn, transitionSpeed, transitionFn, transitionSpeed, transitionFn, function (props) {
  return props.theme.navbarFontColor || '#333';
}, navbarHeight, function (props) {
  return props.topNav ? '0' : sidebarWidth;
}, function (props) {
  return props.theme.backgroundColor || '#fff';
}, screenHeaderCollapse, screenSmMin, function (props) {
  return !props.topNav && props.sidebarMini && props.collapse ? sidebarMiniWidth : sidebarWidth;
});

var Navbar = function Navbar(props) {
  return React.createElement(
    StyledNavbar,
    {
      topNav: props.topNav,
      sidebarMini: props.sidebarMini,
      collapse: props.collapse
    },
    React.createElement(ToggleButton, { name: 'sidebar-toggle', className: 'fa fa-bars', onClick: props.toggle }),
    React.createElement(
      StyledNavbarMenu,
      null,
      React.createElement(
        StyledNavbarMenuList,
        { name: 'navbar-menu-wrapper' },
        props.children
      )
    )
  );
};

process.env.NODE_ENV !== "production" ? Navbar.propTypes = {
  children: PropTypes.node,
  toggle: PropTypes.func.isRequired,
  topNav: PropTypes.bool,
  sidebarMini: PropTypes.bool,
  collapse: PropTypes.bool
} : void 0;

export default Navbar;