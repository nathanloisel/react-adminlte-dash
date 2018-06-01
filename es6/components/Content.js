var _templateObject = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  box-sizing: border-box;\n\n  /* theme */\n  ', '\n  background-color: transparent;\n\n  min-height: 100%;\n  margin-left: ', ';\n  z-index: 800;\n\n  -webkit-transition: ', ' ', ', width ', ' ', ';\n  -moz-transition: ', ' ', ', width ', ' ', ';\n  -o-transition: ', ' ', ', width ', ' ', ';\n  transition: ', ' ', ', width ', ' ', ';\n\n  /* fixed layout */\n  ', ';\n\n  /* media queries */\n  /* sidebar on large screens */\n  @media (min-width: ', ') {\n    ', '\n    ', '\n  }\n  /* sidebar on small screens */\n  @media (max-width: ', ') {\n    margin-left: 0;\n    ', ';\n  }\n'], ['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  box-sizing: border-box;\n\n  /* theme */\n  ', '\n  background-color: transparent;\n\n  min-height: 100%;\n  margin-left: ', ';\n  z-index: 800;\n\n  -webkit-transition: ', ' ', ', width ', ' ', ';\n  -moz-transition: ', ' ', ', width ', ' ', ';\n  -o-transition: ', ' ', ', width ', ' ', ';\n  transition: ', ' ', ', width ', ' ', ';\n\n  /* fixed layout */\n  ', ';\n\n  /* media queries */\n  /* sidebar on large screens */\n  @media (min-width: ', ') {\n    ', '\n    ', '\n  }\n  /* sidebar on small screens */\n  @media (max-width: ', ') {\n    margin-left: 0;\n    ', ';\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';

import { fontFamilyBase, fontSizeBase, lineHeightBase, fontWeightBase, screenXsMax, screenSmMin, navbarHeight, sidebarWidth, sidebarMiniWidth, transitionSpeed, transitionFn } from '../styles/variables';

var Content = styled.div(_templateObject, fontFamilyBase, fontWeightBase, fontSizeBase, lineHeightBase, function (props) {
  return props.theme.contentLeftBorder && 'border-left: ' + props.theme.contentLeftBorder + ';';
}, function (props) {
  return props.topNav ? '0' : sidebarWidth;
}, transitionSpeed, transitionFn, transitionSpeed, transitionFn, transitionSpeed, transitionFn, transitionSpeed, transitionFn, transitionSpeed, transitionFn, transitionSpeed, transitionFn, transitionSpeed, transitionFn, transitionSpeed, transitionFn, function (props) {
  return props.fixed && 'padding-top: ' + navbarHeight + ';';
}, screenSmMin, function (props) {
  return props.sidebarCollapse && props.sidebarMini && '\n      margin-left: ' + sidebarMiniWidth + ' !important;\n      z-index: 840;\n    ';
}, function (props) {
  return props.sidebarCollapse && !props.sidebarMini && 'margin-left: 0;';
}, screenXsMax, function (props) {
  return props.fixed && 'padding-top: ' + parseInt(navbarHeight, 10) * 2 + 'px;';
});

export default Content;