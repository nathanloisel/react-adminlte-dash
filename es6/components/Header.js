var _templateObject = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  position: ', ';\n  width: ', ';\n  max-height: 100px;\n  z-index: 1030;\n\n  /* theme */\n  ', '\n'], ['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  position: ', ';\n  width: ', ';\n  max-height: 100px;\n  z-index: 1030;\n\n  /* theme */\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Navbar from './Navbar/Navbar';
import Logo from './Navbar/Logo';
import UserMenu from './Navbar/UserMenu';
import NavItem from './Navbar/NavItem';

var StyledHeader = styled.header(_templateObject, function (props) {
  return props.fixed ? 'fixed' : 'relative';
}, function (props) {
  return props.boxed ? '1024px' : '100%';
}, function (props) {
  return props.theme.headerBoxShadow && '\n    -webkit-box-shadow: ' + props.theme.headerBoxShadow + ';\n    box-shadow: ' + props.theme.headerBoxShadow + ';\n  ';
});

var Header = function Header(props) {
  return React.createElement(
    StyledHeader,
    { fixed: props.fixed },
    React.createElement(Logo, {
      collapse: props.sidebarCollapse,
      sidebarMini: props.sidebarMini,
      onClick: props.logoOnClick,
      href: props.logoHref,
      logoLg: props.logoLg,
      logoSm: props.logoSm
    }),
    React.createElement(
      Navbar,
      {
        toggle: props.sidebarToggle,
        collapse: props.sidebarCollapse,
        sidebarMini: props.sidebarMini
      },
      props.children
    )
  );
};

process.env.NODE_ENV !== "production" ? Header.propTypes = {
  children: PropTypes.node,
  fixed: PropTypes.bool,
  logoOnClick: PropTypes.func,
  logoHref: PropTypes.string,
  logoLg: PropTypes.element,
  logoSm: PropTypes.element,
  sidebarMini: PropTypes.bool,
  sidebarCollapse: PropTypes.bool,
  sidebarToggle: PropTypes.func.isRequired
} : void 0;

Header.defaultProps = {
  fixed: false,
  sidebarMini: false,
  sidebarCollapse: false,
  logoLg: React.createElement(
    'span',
    null,
    React.createElement(
      'b',
      null,
      'Admin'
    ),
    'LTE'
  ),
  logoSm: React.createElement(
    'span',
    null,
    React.createElement(
      'b',
      null,
      'A'
    ),
    'LT'
  )
};

Header.UserMenu = UserMenu;
Header.Item = NavItem;

export default Header;