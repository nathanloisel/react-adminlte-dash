'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  -webkit-transition: ', ' ', ', width ', ' ', ';\n  -moz-transition: ', ' ', ', width ', ' ', ';\n  -o-transition: ', ' ', ', width ', ' ', ';\n  transition: ', ' ', ', width ', ' ', ';\n\n  box-sizing: border-box;\n  display: block;\n  z-index: 820;\n  background: ', ';\n  padding: 15px;\n  color: #444;\n  border-top: 1px solid ', ';\n  margin-left: ', ';\n\n  /* theme */\n  ', '\n\n  /* media queries */\n  /* sidebar on large screens */\n  @media (min-width: ', ') {\n    ', '\n    ', '\n  }\n'], ['\n  -webkit-transition: ', ' ', ', width ', ' ', ';\n  -moz-transition: ', ' ', ', width ', ' ', ';\n  -o-transition: ', ' ', ', width ', ' ', ';\n  transition: ', ' ', ', width ', ' ', ';\n\n  box-sizing: border-box;\n  display: block;\n  z-index: 820;\n  background: ', ';\n  padding: 15px;\n  color: #444;\n  border-top: 1px solid ', ';\n  margin-left: ', ';\n\n  /* theme */\n  ', '\n\n  /* media queries */\n  /* sidebar on large screens */\n  @media (min-width: ', ') {\n    ', '\n    ', '\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Footer = _styledComponents2.default.footer(_templateObject, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.white, _variables.gray, function (props) {
  return props.topNav ? '0' : _variables.sidebarWidth;
}, function (props) {
  return props.theme.contentLeftBorder && 'border-left: ' + props.theme.contentLeftBorder + ';';
}, _variables.screenSmMin, function (props) {
  return props.sidebarCollapse && props.sidebarMini && '\n      margin-left: ' + _variables.sidebarMiniWidth + ' !important;\n      z-index: 840;\n    ';
}, function (props) {
  return props.sidebarCollapse && !props.sidebarMini && 'margin-left: 0;';
});

exports.default = Footer;