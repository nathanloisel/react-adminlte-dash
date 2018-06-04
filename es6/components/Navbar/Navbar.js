'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  -webkit-margin-before: 1em;\n  -webkit-margin-after: 1em;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 40px;\n  box-sizing: border-box;\n  display: block;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  /* media queries */\n  @media (max-width: ', ') {\n    float: left;\n  }\n  @media (min-width: ', ') {\n    float: right;\n  }\n'], ['\n  -webkit-margin-before: 1em;\n  -webkit-margin-after: 1em;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 40px;\n  box-sizing: border-box;\n  display: block;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  /* media queries */\n  @media (max-width: ', ') {\n    float: left;\n  }\n  @media (min-width: ', ') {\n    float: right;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  display: block;\n  float: right;\n'], ['\n  box-sizing: border-box;\n  display: block;\n  float: right;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* transitions */\n  -webkit-transition: margin-left ', ' ', ';\n  -o-transition: margin-left ', ' ', ';\n  transition: margin-left ', ' ', ';\n\n  color: ', ';\n  display: block;\n  font-weight: 400;\n  position: relative;\n  min-height: ', ';\n  z-index: 1000;\n  margin-bottom: 0;\n  margin-left: ', ';\n  border: none;\n  border-radius: 0;\n  background-color: ', ';\n\n  /* media queries */\n  @media (max-width: ', ') {\n    width: 100%;\n    float: none;\n    margin: 0;\n  }\n  @media (min-width: ', ') {\n    margin-left: ', ';\n  }\n'], ['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* transitions */\n  -webkit-transition: margin-left ', ' ', ';\n  -o-transition: margin-left ', ' ', ';\n  transition: margin-left ', ' ', ';\n\n  color: ', ';\n  display: block;\n  font-weight: 400;\n  position: relative;\n  min-height: ', ';\n  z-index: 1000;\n  margin-bottom: 0;\n  margin-left: ', ';\n  border: none;\n  border-radius: 0;\n  background-color: ', ';\n\n  /* media queries */\n  @media (max-width: ', ') {\n    width: 100%;\n    float: none;\n    margin: 0;\n  }\n  @media (min-width: ', ') {\n    margin-left: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ToggleButton = require('./ToggleButton');

var _ToggleButton2 = _interopRequireDefault(_ToggleButton);

var _variables = require('../../styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


var StyledNavbarMenuList = _styledComponents2.default.ul(_templateObject, _variables.screenHeaderCollapse, _variables.screenSmMin);

var StyledNavbarMenu = _styledComponents2.default.div(_templateObject2);

var StyledNavbar = _styledComponents2.default.nav(_templateObject3, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, function (props) {
  return props.theme.navbarFontColor || '#333';
}, _variables.navbarHeight, function (props) {
  return props.topNav ? '0' : _variables.sidebarWidth;
}, function (props) {
  return props.theme.backgroundColor || '#fff';
}, _variables.screenHeaderCollapse, _variables.screenSmMin, function (props) {
  return !props.topNav && props.sidebarMini && props.collapse ? _variables.sidebarMiniWidth : _variables.sidebarWidth;
});

var Navbar = function Navbar(props) {
  return _react2.default.createElement(
    StyledNavbar,
    {
      topNav: props.topNav,
      sidebarMini: props.sidebarMini,
      collapse: props.collapse
    },
    _react2.default.createElement(_ToggleButton2.default, { name: 'sidebar-toggle', className: 'fa fa-bars', onClick: props.toggle }),
    _react2.default.createElement(
      StyledNavbarMenu,
      null,
      _react2.default.createElement(
        StyledNavbarMenuList,
        { name: 'navbar-menu-wrapper' },
        props.children
      )
    )
  );
};

Navbar.propTypes = {
  children: _propTypes2.default.node,
  toggle: _propTypes2.default.func.isRequired,
  topNav: _propTypes2.default.bool,
  sidebarMini: _propTypes2.default.bool,
  collapse: _propTypes2.default.bool
};

exports.default = Navbar;