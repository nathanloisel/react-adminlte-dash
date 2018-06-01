var _templateObject = _taggedTemplateLiteral(['\n  -webkit-transition: ', ' ', ', width ', ' ', ';\n  -moz-transition: ', ' ', ', width ', ' ', ';\n  -o-transition: ', ' ', ', width ', ' ', ';\n  transition: ', ' ', ', width ', ' ', ';\n\n  box-sizing: border-box;\n  display: block;\n  z-index: 820;\n  background: ', ';\n  padding: 15px;\n  color: #444;\n  border-top: 1px solid ', ';\n  margin-left: ', ';\n\n  /* theme */\n  ', '\n\n  /* media queries */\n  /* sidebar on large screens */\n  @media (min-width: ', ') {\n    ', '\n    ', '\n  }\n'], ['\n  -webkit-transition: ', ' ', ', width ', ' ', ';\n  -moz-transition: ', ' ', ', width ', ' ', ';\n  -o-transition: ', ' ', ', width ', ' ', ';\n  transition: ', ' ', ', width ', ' ', ';\n\n  box-sizing: border-box;\n  display: block;\n  z-index: 820;\n  background: ', ';\n  padding: 15px;\n  color: #444;\n  border-top: 1px solid ', ';\n  margin-left: ', ';\n\n  /* theme */\n  ', '\n\n  /* media queries */\n  /* sidebar on large screens */\n  @media (min-width: ', ') {\n    ', '\n    ', '\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';

import { gray, white, screenSmMin, sidebarWidth, sidebarMiniWidth, transitionSpeed, transitionFn } from '../styles/variables';

var Footer = styled.footer(_templateObject, transitionSpeed, transitionFn, transitionSpeed, transitionFn, transitionSpeed, transitionFn, transitionSpeed, transitionFn, transitionSpeed, transitionFn, transitionSpeed, transitionFn, transitionSpeed, transitionFn, transitionSpeed, transitionFn, white, gray, function (props) {
  return props.topNav ? '0' : sidebarWidth;
}, function (props) {
  return props.theme.contentLeftBorder && 'border-left: ' + props.theme.contentLeftBorder + ';';
}, screenSmMin, function (props) {
  return props.sidebarCollapse && props.sidebarMini && '\n      margin-left: ' + sidebarMiniWidth + ' !important;\n      z-index: 840;\n    ';
}, function (props) {
  return props.sidebarCollapse && !props.sidebarMini && 'margin-left: 0;';
});

export default Footer;