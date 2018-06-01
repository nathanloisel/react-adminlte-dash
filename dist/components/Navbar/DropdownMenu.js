'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 40px;\n  -webkit-margin-before: 0px;\n  -webkit-margin-after: 0px;\n  color: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  text-align: left;\n  font-family: ', ';\n  font-weight: ', ';\n\n  position: absolute;\n  top: 100%;\n  left: auto;\n  right: 0;\n  z-index: 1000;\n  display: ', ';\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  border: 1px solid rgba(0,0,0,.15);\n  -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);\n  box-shadow: 0 6px 12px rgba(0,0,0,.175);\n  border-color: #eee;\n\n  /* media queries */\n  @media (max-width: ', ') {\n    position: absolute;\n    right: 5%;\n    left: auto;\n    border: 1px solid #ddd;\n    background: #fff;\n  }\n'], ['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 40px;\n  -webkit-margin-before: 0px;\n  -webkit-margin-after: 0px;\n  color: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  text-align: left;\n  font-family: ', ';\n  font-weight: ', ';\n\n  position: absolute;\n  top: 100%;\n  left: auto;\n  right: 0;\n  z-index: 1000;\n  display: ', ';\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  border: 1px solid rgba(0,0,0,.15);\n  -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);\n  box-shadow: 0 6px 12px rgba(0,0,0,.175);\n  border-color: #eee;\n\n  /* media queries */\n  @media (max-width: ', ') {\n    position: absolute;\n    right: 5%;\n    left: auto;\n    border: 1px solid #ddd;\n    background: #fff;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../../styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DropdownMenu = _styledComponents2.default.ul(_templateObject, _variables.baseColor, _variables.fontSizeBase, _variables.lineHeightBase, _variables.fontFamilyBase, _variables.fontWeightBase, function (props) {
  return props.open ? 'block' : 'none';
}, _variables.screenSmMax);

exports.default = DropdownMenu;