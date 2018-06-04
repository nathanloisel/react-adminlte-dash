'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: auto;\n  padding-bottom: 10px;\n  display: block;\n'], ['\n  height: auto;\n  padding-bottom: 10px;\n  display: block;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  &:before, &:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  /* theme */\n  background-color: ', ';\n\n  position: ', ';\n  top: 0;\n  left: 0;\n  padding-top: 50px;\n  min-height: 100vh;\n  height: 100%;\n  width: ', ';\n  z-index: 810;\n\n  -webkit-transition: ', ' ', ', width ', ' ', ';\n  -moz-transition: ', ' ', ', width ', ' ', ';\n  -o-transition: ', ' ', ', width ', ' ', ';\n  transition: ', ' ', ', width ', ' ', ';\n\n  /* media queries */\n  /* sidebar on large screens */\n  @media (min-width: ', ') {\n    margin-left: 0;\n    ', '\n  }\n  /* sidebar on small screens */\n  @media (max-width: ', ') {\n    padding-top: 100px;\n    ', ';\n  }\n'], ['\n  &:before, &:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  /* theme */\n  background-color: ', ';\n\n  position: ', ';\n  top: 0;\n  left: 0;\n  padding-top: 50px;\n  min-height: 100vh;\n  height: 100%;\n  width: ', ';\n  z-index: 810;\n\n  -webkit-transition: ', ' ', ', width ', ' ', ';\n  -moz-transition: ', ' ', ', width ', ' ', ';\n  -o-transition: ', ' ', ', width ', ' ', ';\n  transition: ', ' ', ', width ', ' ', ';\n\n  /* media queries */\n  /* sidebar on large screens */\n  @media (min-width: ', ') {\n    margin-left: 0;\n    ', '\n  }\n  /* sidebar on small screens */\n  @media (max-width: ', ') {\n    padding-top: 100px;\n    ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _UserPanel = require('./Sidebar/UserPanel');

var _UserPanel2 = _interopRequireDefault(_UserPanel);

var _Search = require('./Sidebar/Search');

var _Search2 = _interopRequireDefault(_Search);

var _Menu = require('./Sidebar/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _variables = require('../styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


var StyledSection = _styledComponents2.default.section(_templateObject);

var StyledAside = _styledComponents2.default.aside(_templateObject2, function (props) {
  return props.theme.sidebarBg;
}, function (props) {
  return props.fixed ? 'fixed' : 'absolute';
}, _variables.sidebarWidth, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.screenSmMin, function (props) {
  if (props.collapse) {
    if (props.mini) {
      return '\n            width: ' + _variables.sidebarMiniWidth + ';\n            z-index: 850;\n          ';
    }
    return '\n          -webkit-transform: translate(-' + _variables.sidebarWidth + ', 0);\n          -ms-transform: translate(-' + _variables.sidebarWidth + ', 0);\n          -o-transform: translate(-' + _variables.sidebarWidth + ', 0);\n          transform: translate(-' + _variables.sidebarWidth + ', 0);\n        ';
  }
  return '\n        -webkit-transform: translate(0, 0);\n        -ms-transform: translate(0, 0);\n        -o-transform: translate(0, 0);\n        transform: translate(0, 0);\n      ';
}, _variables.screenXsMax, function (props) {
  return props.collapse ? '\n      -webkit-transform: translate(-' + _variables.sidebarWidth + ', 0);\n      -ms-transform: translate(-' + _variables.sidebarWidth + ', 0);\n      -o-transform: translate(-' + _variables.sidebarWidth + ', 0);\n      transform: translate(-' + _variables.sidebarWidth + ', 0);\n    ' : '\n      -webkit-transform: translate(0, 0);\n      -ms-transform: translate(0, 0);\n      -o-transform: translate(0, 0);\n      transform: translate(0, 0);\n    ';
});

var renderChildren = function renderChildren(children, sidebarCollapse) {
  return _react2.default.Children.map(children, function (child) {
    return _react2.default.cloneElement(child, {
      collapse: sidebarCollapse
    });
  });
};

var Sidebar = function Sidebar(_ref) {
  var children = _ref.children,
      _ref$fixed = _ref.fixed,
      fixed = _ref$fixed === undefined ? false : _ref$fixed,
      _ref$sidebarMini = _ref.sidebarMini,
      sidebarMini = _ref$sidebarMini === undefined ? false : _ref$sidebarMini,
      _ref$sidebarCollapse = _ref.sidebarCollapse,
      sidebarCollapse = _ref$sidebarCollapse === undefined ? false : _ref$sidebarCollapse;
  return _react2.default.createElement(
    StyledAside,
    {
      fixed: fixed,
      collapse: sidebarCollapse,
      mini: sidebarMini
    },
    _react2.default.createElement(
      StyledSection,
      { name: 'sidebar-wrapper' },
      renderChildren(children, sidebarCollapse)
    )
  );
};

Sidebar.propTypes = {
  children: _propTypes2.default.node,
  fixed: _propTypes2.default.bool,
  sidebarMini: _propTypes2.default.bool,
  sidebarCollapse: _propTypes2.default.bool
};

Sidebar.UserPanel = _UserPanel2.default;
Sidebar.Search = _Search2.default;
Sidebar.Menu = _Menu2.default;

exports.default = Sidebar;