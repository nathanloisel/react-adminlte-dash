'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  /* transitions */\n  transition: width ', ' ', ';\n\n  /* theme */\n  background-color: ', ' !important;\n  color: ', ' !important;\n  border-bottom: ', ' !important;\n  border-right: ', ' !important;\n  &:hover {\n    background-color: ', ' !important;\n  }\n\n  display: block;\n  text-decoration: none;\n  float: left;\n  height: ', ';\n  font-size: 20px;\n  line-height: ', ';\n  text-align: center;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  padding: 0 15px;\n  font-weight: 300;\n  overflow: hidden;\n  &:hover, &:focus {\n    text-decoration: none !important;\n    outline: none;\n  }\n\n  /* media queries */\n  @media (max-width: ', ') {\n    width: 100%;\n    float: none;\n    ', '\n  }\n  @media (min-width: ', ') {\n    width: ', ';\n    ', ';\n  }\n'], ['\n  /* transitions */\n  transition: width ', ' ', ';\n\n  /* theme */\n  background-color: ', ' !important;\n  color: ', ' !important;\n  border-bottom: ', ' !important;\n  border-right: ', ' !important;\n  &:hover {\n    background-color: ', ' !important;\n  }\n\n  display: block;\n  text-decoration: none;\n  float: left;\n  height: ', ';\n  font-size: 20px;\n  line-height: ', ';\n  text-align: center;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  padding: 0 15px;\n  font-weight: 300;\n  overflow: hidden;\n  &:hover, &:focus {\n    text-decoration: none !important;\n    outline: none;\n  }\n\n  /* media queries */\n  @media (max-width: ', ') {\n    width: 100%;\n    float: none;\n    ', '\n  }\n  @media (min-width: ', ') {\n    width: ', ';\n    ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n  @media (min-width: ', ') {\n    display: ', '\n  }\n'], ['\n  display: block;\n  @media (min-width: ', ') {\n    display: ', '\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: none;\n  @media (min-width: ', ') {\n    display: ', '\n  }\n'], ['\n  display: none;\n  @media (min-width: ', ') {\n    display: ', '\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../../styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


var StyledLogo = _styledComponents2.default.a(_templateObject, _variables.transitionSpeed, _variables.transitionFn, function (props) {
  return props.theme.logoBgColor || '#fff';
}, function (props) {
  return props.theme.logoColor || '#000';
}, function (props) {
  return props.theme.logoBorderBottom || 'none';
}, function (props) {
  return props.theme.navbarItemBorder || 'none';
}, function (props) {
  return props.theme.logoHover || '#f6f6f6';
}, _variables.navbarHeight, _variables.navbarHeight, _variables.screenHeaderCollapse, function (_ref) {
  var theme = _ref.theme;
  return theme.logoSmallVariant || '';
}, _variables.screenSmMin, function (_ref2) {
  var sidebarMini = _ref2.sidebarMini,
      collapse = _ref2.collapse;
  return sidebarMini && collapse ? _variables.sidebarMiniWidth : _variables.sidebarWidth;
}, function (_ref3) {
  var sidebarMini = _ref3.sidebarMini,
      collapse = _ref3.collapse;
  return sidebarMini && collapse && 'padding: 0;';
});

var LargeLogo = _styledComponents2.default.span(_templateObject2, _variables.screenSmMin, function (_ref4) {
  var sidebarMini = _ref4.sidebarMini,
      collapse = _ref4.collapse;
  return sidebarMini && collapse ? 'none' : 'block';
});

var SmallLogo = _styledComponents2.default.span(_templateObject3, _variables.screenSmMin, function (_ref5) {
  var sidebarMini = _ref5.sidebarMini,
      collapse = _ref5.collapse;
  return sidebarMini && collapse ? 'block' : 'none';
});

var Logo = function Logo(_ref6) {
  var _ref6$href = _ref6.href,
      href = _ref6$href === undefined ? '/' : _ref6$href,
      onClick = _ref6.onClick,
      logoLg = _ref6.logoLg,
      logoSm = _ref6.logoSm,
      sidebarMini = _ref6.sidebarMini,
      collapse = _ref6.collapse;
  return onClick ? _react2.default.createElement(
    StyledLogo,
    {
      sidebarMini: sidebarMini,
      collapse: collapse,
      name: 'navbar-logo',
      onClick: onClick,
      href: null
    },
    _react2.default.createElement(
      LargeLogo,
      {
        sidebarMini: sidebarMini,
        collapse: collapse,
        name: 'navbar-logo-lg'
      },
      logoLg
    ),
    _react2.default.createElement(
      SmallLogo,
      {
        sidebarMini: sidebarMini,
        collapse: collapse,
        name: 'navbar-logo-sm'
      },
      logoSm
    )
  ) : _react2.default.createElement(
    StyledLogo,
    {
      sidebarMini: sidebarMini,
      collapse: collapse,
      name: 'navbar-logo',
      href: href
    },
    _react2.default.createElement(
      LargeLogo,
      {
        sidebarMini: sidebarMini,
        collapse: collapse,
        name: 'navbar-logo-lg'
      },
      logoLg
    ),
    _react2.default.createElement(
      SmallLogo,
      {
        sidebarMini: sidebarMini,
        collapse: collapse,
        name: 'navbar-logo-sm'
      },
      logoSm
    )
  );
};

Logo.propTypes = {
  href: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  logoLg: _propTypes2.default.element,
  logoSm: _propTypes2.default.element,
  sidebarMini: _propTypes2.default.bool,
  collapse: _propTypes2.default.bool
};

exports.default = Logo;