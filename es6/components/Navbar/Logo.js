var _templateObject = _taggedTemplateLiteral(['\n  /* transitions */\n  -webkit-transition: width ', ' ', ';\n  -o-transition: width ', ' ', ';\n  transition: width ', ' ', ';\n\n  /* theme */\n  background-color: ', ' !important;\n  color: ', ' !important;\n  border-bottom: ', ' !important;;\n  border-right: ', ' !important;;\n  &:hover {\n    background-color: ', ' !important;;\n  }\n\n  display: block;\n  text-decoration: none;\n  float: left;\n  height: ', ';\n  font-size: 20px;\n  line-height: ', ';\n  text-align: center;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  padding: 0 15px;\n  font-weight: 300;\n  overflow: hidden;\n  &:hover, &:focus {\n    text-decoration: none !important;\n    outline: none;\n  }\n\n  /* media queries */\n  @media (max-width: ', ') {\n    width: 100%;\n    float: none;\n    ', '\n  }\n  @media (min-width: ', ') {\n    width: ', ';\n    ', ';\n  }\n'], ['\n  /* transitions */\n  -webkit-transition: width ', ' ', ';\n  -o-transition: width ', ' ', ';\n  transition: width ', ' ', ';\n\n  /* theme */\n  background-color: ', ' !important;\n  color: ', ' !important;\n  border-bottom: ', ' !important;;\n  border-right: ', ' !important;;\n  &:hover {\n    background-color: ', ' !important;;\n  }\n\n  display: block;\n  text-decoration: none;\n  float: left;\n  height: ', ';\n  font-size: 20px;\n  line-height: ', ';\n  text-align: center;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  padding: 0 15px;\n  font-weight: 300;\n  overflow: hidden;\n  &:hover, &:focus {\n    text-decoration: none !important;\n    outline: none;\n  }\n\n  /* media queries */\n  @media (max-width: ', ') {\n    width: 100%;\n    float: none;\n    ', '\n  }\n  @media (min-width: ', ') {\n    width: ', ';\n    ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n  @media (min-width: ', ') {\n    display: ', '\n  }\n'], ['\n  display: block;\n  @media (min-width: ', ') {\n    display: ', '\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: none;\n  @media (min-width: ', ') {\n    display: ', '\n  }\n'], ['\n  display: none;\n  @media (min-width: ', ') {\n    display: ', '\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { transitionSpeed, transitionFn, screenSmMin, sidebarWidth, sidebarMiniWidth, navbarHeight, screenHeaderCollapse } from '../../styles/variables';

var StyledLogo = styled.a(_templateObject, transitionSpeed, transitionFn, transitionSpeed, transitionFn, transitionSpeed, transitionFn, function (props) {
  return props.theme.logoBgColor || '#fff';
}, function (props) {
  return props.theme.logoColor || '#000';
}, function (props) {
  return props.theme.logoBorderBottom || 'none';
}, function (props) {
  return props.theme.navbarItemBorder || 'none';
}, function (props) {
  return props.theme.logoHover || '#f6f6f6';
}, navbarHeight, navbarHeight, screenHeaderCollapse, function (props) {
  return props.theme.logoSmallVariant || '';
}, screenSmMin, function (props) {
  return props.sidebarMini && props.collapse ? sidebarMiniWidth : sidebarWidth;
}, function (props) {
  return props.sidebarMini && props.collapse && 'padding: 0;';
});

var LargeLogo = styled.span(_templateObject2, screenSmMin, function (props) {
  return props.sidebarMini && props.collapse ? 'none' : 'block';
});

var SmallLogo = styled.span(_templateObject3, screenSmMin, function (props) {
  return props.sidebarMini && props.collapse ? 'block' : 'none';
});

var Logo = function Logo(_ref) {
  var _ref$href = _ref.href,
      href = _ref$href === undefined ? '/' : _ref$href,
      onClick = _ref.onClick,
      logoLg = _ref.logoLg,
      logoSm = _ref.logoSm,
      sidebarMini = _ref.sidebarMini,
      collapse = _ref.collapse;
  return onClick ? React.createElement(
    StyledLogo,
    { sidebarMini: sidebarMini, collapse: collapse, name: 'navbar-logo', onClick: onClick, href: null },
    React.createElement(
      LargeLogo,
      { sidebarMini: sidebarMini, collapse: collapse, name: 'navbar-logo-lg' },
      logoLg
    ),
    React.createElement(
      SmallLogo,
      { sidebarMini: sidebarMini, collapse: collapse, name: 'navbar-logo-sm' },
      logoSm
    )
  ) : React.createElement(
    StyledLogo,
    { sidebarMini: sidebarMini, collapse: collapse, name: 'navbar-logo', href: href },
    React.createElement(
      LargeLogo,
      { sidebarMini: sidebarMini, collapse: collapse, name: 'navbar-logo-lg' },
      logoLg
    ),
    React.createElement(
      SmallLogo,
      { sidebarMini: sidebarMini, collapse: collapse, name: 'navbar-logo-sm' },
      logoSm
    )
  );
};

process.env.NODE_ENV !== "production" ? Logo.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  logoLg: PropTypes.element,
  logoSm: PropTypes.element,
  sidebarMini: PropTypes.bool,
  collapse: PropTypes.bool
} : void 0;

export default Logo;