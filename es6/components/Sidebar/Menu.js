var _templateObject = _taggedTemplateLiteral(['\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  display: ', ';\n  text-align: -webkit-match-parent;\n  position: relative;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 10px 25px 10px 15px;\n  font-size: 12px;\n  background-attachment: scroll;\n  background-clip: initial;\n  background-image: none;\n  background-origin: initial;\n  background-position: initial;\n  background-repeat: initial;\n  background-size: initial;\n  text-overflow: clip;\n\n  /* collapse transform */\n  ', '\n\n  /* theme */\n  color: ', ';\n  background-color: ', ';\n'], ['\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  display: ', ';\n  text-align: -webkit-match-parent;\n  position: relative;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 10px 25px 10px 15px;\n  font-size: 12px;\n  background-attachment: scroll;\n  background-clip: initial;\n  background-image: none;\n  background-origin: initial;\n  background-position: initial;\n  background-repeat: initial;\n  background-size: initial;\n  text-overflow: clip;\n\n  /* collapse transform */\n  ', '\n\n  /* theme */\n  color: ', ';\n  background-color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n  overflow: hidden;\n\n  &:hover {\n    overflow: visible;\n  }\n'], ['\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n  overflow: hidden;\n\n  &:hover {\n    overflow: visible;\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MenuItem from './MenuItem';

var StyledHeader = styled.li(_templateObject, function (props) {
  return props.collapse ? 'none !important' : 'list-item';
}, function (props) {
  return props.collapse && '-webkit-transform: translateZ(0);';
}, function (props) {
  return props.theme.sidebarHeaderColor || '#fff';
}, function (props) {
  return props.theme.sidebarHeaderBg || '#fff';
});

var StyledMenu = styled.ul(_templateObject2);

var renderChildren = function renderChildren(children, sidebarCollapse) {
  return React.Children.map(children, function (child) {
    return React.cloneElement(child, {
      collapse: sidebarCollapse
    });
  });
};

var Menu = function Menu(_ref) {
  var children = _ref.children,
      header = _ref.header,
      collapse = _ref.collapse;
  return React.createElement(
    StyledMenu,
    { collapse: collapse },
    React.createElement(
      StyledHeader,
      { collapse: collapse },
      header
    ),
    renderChildren(children, collapse)
  );
};

process.env.NODE_ENV !== "production" ? Menu.propTypes = {
  children: PropTypes.node,
  header: PropTypes.string,
  collapse: PropTypes.bool
} : void 0;

Menu.Item = MenuItem;

export default Menu;