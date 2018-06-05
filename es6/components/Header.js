'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  position: ', ';\n  width: ', ';\n  max-height: 100px;\n  z-index: 1030;\n\n  /* theme */\n  ', '\n'], ['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  position: ', ';\n  width: ', ';\n  max-height: 100px;\n  z-index: 1030;\n\n  /* theme */\n  ', '\n']);

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


var StyledHeader = _styledComponents2.default.header(_templateObject, function (_ref) {
  var fixed = _ref.fixed;
  return fixed ? 'fixed' : 'relative';
}, function (_ref2) {
  var boxed = _ref2.boxed;
  return boxed ? '1024px' : '100%';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.headerBoxShadow && '\n    box-shadow: ' + theme.headerBoxShadow + ';\n  ';
});

var Header = function Header(_ref4) {
  var fixed = _ref4.fixed,
      sidebarCollapse = _ref4.sidebarCollapse,
      sidebarMini = _ref4.sidebarMini,
      logoOnClick = _ref4.logoOnClick,
      logoHref = _ref4.logoHref,
      logoLg = _ref4.logoLg,
      logoSm = _ref4.logoSm,
      sidebarToggle = _ref4.sidebarToggle,
      sidebarToggleIcon = _ref4.sidebarToggleIcon,
      children = _ref4.children;
  return _react2.default.createElement(
    StyledHeader,
    { fixed: fixed },
    _react2.default.createElement(_Logo2.default, {
      collapse: sidebarCollapse,
      sidebarMini: sidebarMini,
      onClick: logoOnClick,
      href: logoHref,
      logoLg: logoLg,
      logoSm: logoSm
    }),
    _react2.default.createElement(
      _Navbar2.default,
      {
        toggle: sidebarToggle,
        toggleIcon: sidebarToggleIcon,
        collapse: sidebarCollapse,
        sidebarMini: sidebarMini
      },
      children
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
  sidebarToggle: _propTypes2.default.func.isRequired,
  sidebarToggleIcon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
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