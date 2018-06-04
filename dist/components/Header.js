'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  position: ', ';\n  width: ', ';\n  max-height: 100px;\n  z-index: 1030;\n\n  /* theme */\n  ', '\n'], ['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  position: ', ';\n  width: ', ';\n  max-height: 100px;\n  z-index: 1030;\n\n  /* theme */\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Navbar = require('./Navbar/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Logo = require('./Navbar/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _UserMenu = require('./Navbar/UserMenu');

var _UserMenu2 = _interopRequireDefault(_UserMenu);

var _NavItem = require('./Navbar/NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


var StyledHeader = _styledComponents2.default.header(_templateObject, function (props) {
  return props.fixed ? 'fixed' : 'relative';
}, function (props) {
  return props.boxed ? '1024px' : '100%';
}, function (props) {
  return props.theme.headerBoxShadow && '\n    -webkit-box-shadow: ' + props.theme.headerBoxShadow + ';\n    box-shadow: ' + props.theme.headerBoxShadow + ';\n  ';
});

var Header = function Header(props) {
  return _react2.default.createElement(
    StyledHeader,
    { fixed: props.fixed },
    _react2.default.createElement(_Logo2.default, {
      collapse: props.sidebarCollapse,
      sidebarMini: props.sidebarMini,
      onClick: props.logoOnClick,
      href: props.logoHref,
      logoLg: props.logoLg,
      logoSm: props.logoSm
    }),
    _react2.default.createElement(
      _Navbar2.default,
      {
        toggle: props.sidebarToggle,
        collapse: props.sidebarCollapse,
        sidebarMini: props.sidebarMini
      },
      props.children
    )
  );
};

Header.propTypes = {
  children: _propTypes2.default.node,
  fixed: _propTypes2.default.bool,
  logoOnClick: _propTypes2.default.func,
  logoHref: _propTypes2.default.string,
  logoLg: _propTypes2.default.element,
  logoSm: _propTypes2.default.element,
  sidebarMini: _propTypes2.default.bool,
  sidebarCollapse: _propTypes2.default.bool,
  sidebarToggle: _propTypes2.default.func.isRequired
};

Header.defaultProps = {
  fixed: false,
  sidebarMini: false,
  sidebarCollapse: false,
  logoLg: _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      'b',
      null,
      'Admin'
    ),
    'LTE'
  ),
  logoSm: _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      'b',
      null,
      'A'
    ),
    'LT'
  )
};

Header.UserMenu = _UserMenu2.default;
Header.Item = _NavItem2.default;

exports.default = Header;