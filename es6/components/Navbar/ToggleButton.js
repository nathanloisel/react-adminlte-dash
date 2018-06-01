'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: ', ';\n  overflow-x: hidden;\n  overflow-y: auto;\n  font-size: ', ';\n  box-sizing: border-box;\n\n  float: left;\n  background-color: transparent;\n  background-image: none;\n  border: none;\n  outline: none;\n  padding: ', 'px ', ';\n  text-decoration: none;\n  &:focus,\n  &:active {\n    background: transparent;\n  }\n\n  /* theme */\n  color: ', ';\n  ', ';\n  &:hover {\n    color: ', ';\n    background-color: ', ';\n  }\n'], ['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: ', ';\n  overflow-x: hidden;\n  overflow-y: auto;\n  font-size: ', ';\n  box-sizing: border-box;\n\n  float: left;\n  background-color: transparent;\n  background-image: none;\n  border: none;\n  outline: none;\n  padding: ', 'px ', ';\n  text-decoration: none;\n  &:focus,\n  &:active {\n    background: transparent;\n  }\n\n  /* theme */\n  color: ', ';\n  ', ';\n  &:hover {\n    color: ', ';\n    background-color: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../../styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ToggleButton = _styledComponents2.default.button(_templateObject, _variables.fontWeightBase, _variables.fontSizeBase, parseInt(_variables.navbarPaddingVertical, 10) + 3, _variables.navbarPaddingHorizontal, function (props) {
  return props.theme.navbarFontColor || '#fff';
}, function (props) {
  return props.theme.navbarItemBorder && '\n    border-right: ' + props.theme.navbarItemBorder + ';\n  ';
}, function (props) {
  return props.theme.navbarHoverColor || '#fff';
}, function (props) {
  return props.theme.logoBgColor || 'transparent';
});

exports.default = ToggleButton;