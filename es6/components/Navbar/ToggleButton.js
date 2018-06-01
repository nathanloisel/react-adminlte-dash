var _templateObject = _taggedTemplateLiteral(['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: ', ';\n  overflow-x: hidden;\n  overflow-y: auto;\n  font-size: ', ';\n  box-sizing: border-box;\n\n  float: left;\n  background-color: transparent;\n  background-image: none;\n  border: none;\n  outline: none;\n  padding: ', 'px ', ';\n  text-decoration: none;\n  &:focus,\n  &:active {\n    background: transparent;\n  }\n\n  /* theme */\n  color: ', ';\n  ', ';\n  &:hover {\n    color: ', ';\n    background-color: ', ';\n  }\n'], ['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: ', ';\n  overflow-x: hidden;\n  overflow-y: auto;\n  font-size: ', ';\n  box-sizing: border-box;\n\n  float: left;\n  background-color: transparent;\n  background-image: none;\n  border: none;\n  outline: none;\n  padding: ', 'px ', ';\n  text-decoration: none;\n  &:focus,\n  &:active {\n    background: transparent;\n  }\n\n  /* theme */\n  color: ', ';\n  ', ';\n  &:hover {\n    color: ', ';\n    background-color: ', ';\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';

import { fontSizeBase, fontWeightBase, navbarPaddingHorizontal, navbarPaddingVertical } from '../../styles/variables';

var ToggleButton = styled.button(_templateObject, fontWeightBase, fontSizeBase, parseInt(navbarPaddingVertical, 10) + 3, navbarPaddingHorizontal, function (props) {
  return props.theme.navbarFontColor || '#fff';
}, function (props) {
  return props.theme.navbarItemBorder && '\n    border-right: ' + props.theme.navbarItemBorder + ';\n  ';
}, function (props) {
  return props.theme.navbarHoverColor || '#fff';
}, function (props) {
  return props.theme.logoBgColor || 'transparent';
});

export default ToggleButton;