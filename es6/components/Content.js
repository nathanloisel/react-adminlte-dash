'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  box-sizing: border-box;\n\n  /* theme */\n  ', '\n  background-color: transparent;\n\n  min-height: 100%;\n  margin-left: ', ';\n  z-index: 800;\n\n  transition: ', ' ', ', width ', ' ', ';\n\n  /* fixed layout */\n  ', ';\n\n  /* media queries */\n  /* sidebar on large screens */\n  @media (min-width: ', ') {\n    ', '\n    ', '\n  }\n  /* sidebar on small screens */\n  @media (max-width: ', ') {\n    margin-left: 0;\n    ', ';\n  }\n'], ['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  box-sizing: border-box;\n\n  /* theme */\n  ', '\n  background-color: transparent;\n\n  min-height: 100%;\n  margin-left: ', ';\n  z-index: 800;\n\n  transition: ', ' ', ', width ', ' ', ';\n\n  /* fixed layout */\n  ', ';\n\n  /* media queries */\n  /* sidebar on large screens */\n  @media (min-width: ', ') {\n    ', '\n    ', '\n  }\n  /* sidebar on small screens */\n  @media (max-width: ', ') {\n    margin-left: 0;\n    ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Content = _styledComponents2.default.div(_templateObject, _variables.fontFamilyBase, _variables.fontWeightBase, _variables.fontSizeBase, _variables.lineHeightBase, function (props) {
  return props.theme.contentLeftBorder && 'border-left: ' + props.theme.contentLeftBorder + ';';
}, function (props) {
  return props.topNav ? '0' : _variables.sidebarWidth;
}, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, function (props) {
  return props.fixed && 'padding-top: ' + _variables.navbarHeight + ';';
}, _variables.screenSmMin, function (props) {
  return props.sidebarCollapse && props.sidebarMini && '\n      margin-left: ' + _variables.sidebarMiniWidth + ' !important;\n      z-index: 840;\n    ';
}, function (props) {
  return props.sidebarCollapse && !props.sidebarMini && 'margin-left: 0;';
}, _variables.screenXsMax, function (props) {
  return props.fixed && 'padding-top: ' + parseInt(_variables.navbarHeight, 10) * 2 + 'px;';
});

exports.default = Content;