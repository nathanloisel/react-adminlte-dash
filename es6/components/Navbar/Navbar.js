'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  -webkit-margin-before: 1em;\n  -webkit-margin-after: 1em;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 40px;\n  box-sizing: border-box;\n  display: block;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  /* media queries */\n  @media (max-width: ', ') {\n    float: left;\n  }\n  @media (min-width: ', ') {\n    float: right;\n  }\n'], ['\n  -webkit-margin-before: 1em;\n  -webkit-margin-after: 1em;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 40px;\n  box-sizing: border-box;\n  display: block;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  /* media queries */\n  @media (max-width: ', ') {\n    float: left;\n  }\n  @media (min-width: ', ') {\n    float: right;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  display: block;\n  float: right;\n'], ['\n  box-sizing: border-box;\n  display: block;\n  float: right;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* transitions */\n  -webkit-transition: margin-left ', ' ', ';\n  -o-transition: margin-left ', ' ', ';\n  transition: margin-left ', ' ', ';\n\n  color: ', ';\n  display: block;\n  font-weight: 400;\n  position: relative;\n  min-height: ', ';\n  z-index: 1000;\n  margin-bottom: 0;\n  margin-left: ', ';\n  border: none;\n  border-radius: 0;\n  background-color: ', ';\n\n  /* media queries */\n  @media (max-width: ', ') {\n    width: 100%;\n    float: none;\n    margin: 0;\n  }\n  @media (min-width: ', ') {\n    margin-left: ', ';\n  }\n'], ['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* transitions */\n  -webkit-transition: margin-left ', ' ', ';\n  -o-transition: margin-left ', ' ', ';\n  transition: margin-left ', ' ', ';\n\n  color: ', ';\n  display: block;\n  font-weight: 400;\n  position: relative;\n  min-height: ', ';\n  z-index: 1000;\n  margin-bottom: 0;\n  margin-left: ', ';\n  border: none;\n  border-radius: 0;\n  background-color: ', ';\n\n  /* media queries */\n  @media (max-width: ', ') {\n    width: 100%;\n    float: none;\n    margin: 0;\n  }\n  @media (min-width: ', ') {\n    margin-left: ', ';\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  padding: 0;\n'], ['\n  padding: 0;\n']);

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

var StyledNavbar = _styledComponents2.default.nav(_templateObject3, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, function (_ref) {
  var theme = _ref.theme;
  return theme.navbarFontColor || '#333';
}, _variables.navbarHeight, function (_ref2) {
  var topNav = _ref2.topNav;
  return topNav ? '0' : _variables.sidebarWidth;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.backgroundColor || '#fff';
}, _variables.screenHeaderCollapse, _variables.screenSmMin, function (_ref4) {
  var topNav = _ref4.topNav,
      sidebarMini = _ref4.sidebarMini,
      collapse = _ref4.collapse;
  return !topNav && sidebarMini && collapse ? _variables.sidebarMiniWidth : _variables.sidebarWidth;
});
var NoPaddingToggleButton = (0, _styledComponents2.default)(_ToggleButton2.default)(_templateObject4);

function getToggleButton(toggle, toggleIcon) {
  if (typeof toggleIcon !== 'undefined') {
    if (typeof toggleIcon !== 'string') {
      return _react2.default.createElement(
        NoPaddingToggleButton,
        {
          name: 'sidebar-toggle',
          onClick: toggle
        },
        toggleIcon
      );
    } else if (typeof toggleIcon === 'string') {
      return _react2.default.createElement(NoPaddingToggleButton, {
        name: 'sidebar-toggle',
        className: toggleIcon,
        onClick: toggle
      });
    }
  }
  return _react2.default.createElement(_ToggleButton2.default, { name: 'sidebar-toggle', className: 'fa fa-bars', onClick: toggle });
}

var Navbar = function Navbar(_ref5) {
  var topNav = _ref5.topNav,
      sidebarMini = _ref5.sidebarMini,
      collapse = _ref5.collapse,
      toggle = _ref5.toggle,
      children = _ref5.children,
      toggleIcon = _ref5.toggleIcon;
  return _react2.default.createElement(
    StyledNavbar,
    {
      topNav: topNav,
      sidebarMini: sidebarMini,
      collapse: collapse
    },
    getToggleButton(toggle, toggleIcon),
    _react2.default.createElement(
      StyledNavbarMenu,
      null,
      _react2.default.createElement(
        StyledNavbarMenuList,
        { name: 'navbar-menu-wrapper' },
        children
      )
    )
  );
};

Navbar.propTypes = {
  children: _propTypes2.default.node,
  toggle: _propTypes2.default.func.isRequired,
  topNav: _propTypes2.default.bool,
  sidebarMini: _propTypes2.default.bool,
  collapse: _propTypes2.default.bool,
  toggleIcon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
};

exports.default = Navbar;