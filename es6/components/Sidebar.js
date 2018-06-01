var _templateObject = _taggedTemplateLiteral(['\n  height: auto;\n  padding-bottom: 10px;\n  display: block;\n'], ['\n  height: auto;\n  padding-bottom: 10px;\n  display: block;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  &:before, &:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  /* theme */\n  background-color: ', ';\n\n  position: ', ';\n  top: 0;\n  left: 0;\n  padding-top: 50px;\n  min-height: 100vh;\n  height: 100%;\n  width: ', ';\n  z-index: 810;\n\n  -webkit-transition: ', ' ', ', width ', ' ', ';\n  -moz-transition: ', ' ', ', width ', ' ', ';\n  -o-transition: ', ' ', ', width ', ' ', ';\n  transition: ', ' ', ', width ', ' ', ';\n\n  /* media queries */\n  /* sidebar on large screens */\n  @media (min-width: ', ') {\n    margin-left: 0;\n    ', '\n  }\n  /* sidebar on small screens */\n  @media (max-width: ', ') {\n    padding-top: 100px;\n    ', ';\n  }\n'], ['\n  &:before, &:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  /* theme */\n  background-color: ', ';\n\n  position: ', ';\n  top: 0;\n  left: 0;\n  padding-top: 50px;\n  min-height: 100vh;\n  height: 100%;\n  width: ', ';\n  z-index: 810;\n\n  -webkit-transition: ', ' ', ', width ', ' ', ';\n  -moz-transition: ', ' ', ', width ', ' ', ';\n  -o-transition: ', ' ', ', width ', ' ', ';\n  transition: ', ' ', ', width ', ' ', ';\n\n  /* media queries */\n  /* sidebar on large screens */\n  @media (min-width: ', ') {\n    margin-left: 0;\n    ', '\n  }\n  /* sidebar on small screens */\n  @media (max-width: ', ') {\n    padding-top: 100px;\n    ', ';\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UserPanel from './Sidebar/UserPanel';
import Search from './Sidebar/Search';
import Menu from './Sidebar/Menu';

import { screenXsMax, screenSmMin, sidebarWidth, sidebarMiniWidth, transitionSpeed, transitionFn } from '../styles/variables';

var StyledSection = styled.section(_templateObject);

var StyledAside = styled.aside(_templateObject2, function (props) {
  return props.theme.sidebarBg;
}, function (props) {
  return props.fixed ? 'fixed' : 'absolute';
}, sidebarWidth, transitionSpeed, transitionFn, transitionSpeed, transitionFn, transitionSpeed, transitionFn, transitionSpeed, transitionFn, transitionSpeed, transitionFn, transitionSpeed, transitionFn, transitionSpeed, transitionFn, transitionSpeed, transitionFn, screenSmMin, function (props) {
  if (props.collapse) {
    if (props.mini) {
      return '\n            width: ' + sidebarMiniWidth + ';\n            z-index: 850;\n          ';
    }
    return '\n          -webkit-transform: translate(-' + sidebarWidth + ', 0);\n          -ms-transform: translate(-' + sidebarWidth + ', 0);\n          -o-transform: translate(-' + sidebarWidth + ', 0);\n          transform: translate(-' + sidebarWidth + ', 0);\n        ';
  }
  return '\n        -webkit-transform: translate(0, 0);\n        -ms-transform: translate(0, 0);\n        -o-transform: translate(0, 0);\n        transform: translate(0, 0);\n      ';
}, screenXsMax, function (props) {
  return props.collapse ? '\n      -webkit-transform: translate(-' + sidebarWidth + ', 0);\n      -ms-transform: translate(-' + sidebarWidth + ', 0);\n      -o-transform: translate(-' + sidebarWidth + ', 0);\n      transform: translate(-' + sidebarWidth + ', 0);\n    ' : '\n      -webkit-transform: translate(0, 0);\n      -ms-transform: translate(0, 0);\n      -o-transform: translate(0, 0);\n      transform: translate(0, 0);\n    ';
});

var renderChildren = function renderChildren(children, sidebarCollapse) {
  return React.Children.map(children, function (child) {
    return React.cloneElement(child, {
      collapse: sidebarCollapse
    });
  });
};

var Sidebar = function Sidebar(_ref) {
  var children = _ref.children,
      _ref$fixed = _ref.fixed,
      fixed = _ref$fixed === undefined ? false : _ref$fixed,
      _ref$sidebarMini = _ref.sidebarMini,
      sidebarMini = _ref$sidebarMini === undefined ? false : _ref$sidebarMini,
      _ref$sidebarCollapse = _ref.sidebarCollapse,
      sidebarCollapse = _ref$sidebarCollapse === undefined ? false : _ref$sidebarCollapse;
  return React.createElement(
    StyledAside,
    {
      fixed: fixed,
      collapse: sidebarCollapse,
      mini: sidebarMini
    },
    React.createElement(
      StyledSection,
      { name: 'sidebar-wrapper' },
      renderChildren(children, sidebarCollapse)
    )
  );
};

process.env.NODE_ENV !== "production" ? Sidebar.propTypes = {
  children: PropTypes.node,
  fixed: PropTypes.bool,
  sidebarMini: PropTypes.bool,
  sidebarCollapse: PropTypes.bool
} : void 0;

Sidebar.UserPanel = UserPanel;
Sidebar.Search = Search;
Sidebar.Menu = Menu;

export default Sidebar;