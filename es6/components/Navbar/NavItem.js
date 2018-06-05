'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  @media (max-width: ', ') {\n    display: none;\n  }\n'], ['\n  @media (max-width: ', ') {\n    display: none;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  color: inherit;\n  box-sizing: border-box;\n  float: left;\n  border: 0;\n  vertical-align: top;\n  border-radius: 50%;\n  margin-right: 10px;\n  max-width: none;\n  font-size: 28px;\n  margin-top: -4px;\n\n  &:hover {\n    color: inherit;\n  }\n\n  cursor: pointer;\n  user-select: none;\n'], ['\n  color: inherit;\n  box-sizing: border-box;\n  float: left;\n  border: 0;\n  vertical-align: top;\n  border-radius: 50%;\n  margin-right: 10px;\n  max-width: none;\n  font-size: 28px;\n  margin-top: -4px;\n\n  &:hover {\n    color: inherit;\n  }\n\n  cursor: pointer;\n  user-select: none;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  color: inherit;\n  box-sizing: border-box;\n  float: left;\n  border: 0;\n  vertical-align: middle;\n  width: ', ';\n  height: ', ';\n  border-radius: 50%;\n  margin-right: 10px;\n  margin-top: ', ';\n  margin-bottom: ', ';\n  max-width: none;\n\n  &:hover {\n    color: inherit;\n  }\n\n  cursor: pointer;\n  user-select: none;\n'], ['\n  color: inherit;\n  box-sizing: border-box;\n  float: left;\n  border: 0;\n  vertical-align: middle;\n  width: ', ';\n  height: ', ';\n  border-radius: 50%;\n  margin-right: 10px;\n  margin-top: ', ';\n  margin-bottom: ', ';\n  max-width: none;\n\n  &:hover {\n    color: inherit;\n  }\n\n  cursor: pointer;\n  user-select: none;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  text-decoration: none;\n  cursor: pointer;\n  user-select: none;\n\n  color: inherit;\n  display: block;\n  padding: ', ' ', ';\n  position: relative;\n  background-color: transparent;\n\n  &:hover {\n    color: inherit;\n    text-decoration: none !important;\n  }\n\n  @media (max-width: ', ') {\n    padding: ', ' 5px;\n  }\n'], ['\n  text-decoration: none;\n  cursor: pointer;\n  user-select: none;\n\n  color: inherit;\n  display: block;\n  padding: ', ' ', ';\n  position: relative;\n  background-color: transparent;\n\n  &:hover {\n    color: inherit;\n    text-decoration: none !important;\n  }\n\n  @media (max-width: ', ') {\n    padding: ', ' 5px;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  box-sizing: border-box;\n\n  float: left;\n  display: block;\n  background-color: transparent;\n  background-image: none;\n  border: none;\n  outline: none;\n  position: relative;\n  text-decoration: none;\n  cursor: pointer;\n  &:focus, &:active {\n    background: transparent;\n    outline: none;\n  }\n\n  /* theme */\n  color: ', ';\n  border-left: ', ';\n  &:hover {\n    color: ', ';\n    background-color: ', ';\n  }\n'], ['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  box-sizing: border-box;\n\n  float: left;\n  display: block;\n  background-color: transparent;\n  background-image: none;\n  border: none;\n  outline: none;\n  position: relative;\n  text-decoration: none;\n  cursor: pointer;\n  &:focus, &:active {\n    background: transparent;\n    outline: none;\n  }\n\n  /* theme */\n  color: ', ';\n  border-left: ', ';\n  &:hover {\n    color: ', ';\n    background-color: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../../styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


var imageSize = Math.floor(parseInt(_variables.navbarHeight, 10) / 2) + 'px';
var imageMarginTop = '-' + Math.ceil((parseInt(imageSize, 10) + parseInt(_variables.navbarPaddingHorizontal, 10) + parseInt(_variables.navbarPaddingVertical, 10) - parseInt(_variables.navbarHeight, 10)) / 2) + 'px';
var imageMarginBottom = '-' + Math.floor((parseInt(imageSize, 10) + parseInt(_variables.navbarPaddingHorizontal, 10) + parseInt(_variables.navbarPaddingVertical, 10) - parseInt(_variables.navbarHeight, 10)) / 2) + 'px';

var StyledSpan = _styledComponents2.default.span(_templateObject, _variables.screenXsMin);

var StyledIcon = _styledComponents2.default.i(_templateObject2);

var StyledImage = _styledComponents2.default.img(_templateObject3, imageSize, imageSize, imageMarginTop, imageMarginBottom);

var StyledLink = _styledComponents2.default.a(_templateObject4, _variables.navbarPaddingVertical, _variables.navbarPaddingHorizontal, _variables.screenXsMin, _variables.navbarPaddingVertical);

var StyledItem = _styledComponents2.default.li(_templateObject5, _variables.fontFamilyBase, _variables.fontWeightBase, _variables.fontSizeBase, _variables.lineHeightBase, function (props) {
  return props.theme.navbarFontColor || '#fff';
}, function (props) {
  return props.theme.navbarItemBorder || 'none';
}, function (props) {
  return props.theme.navbarHoverColor || '#fff';
}, function (props) {
  return props.theme.logoBgColor || 'transparent';
});

var displayImage = function displayImage(src, icon) {
  if (src) {
    return _react2.default.createElement(StyledImage, { src: src });
  } else if (icon) {
    return _react2.default.createElement(StyledIcon, { className: icon });
  }
  return null;
};

var NavItem = function NavItem(_ref) {
  var title = _ref.title,
      onClick = _ref.onClick,
      href = _ref.href,
      image = _ref.image,
      iconClass = _ref.iconClass;
  return _react2.default.createElement(
    StyledItem,
    null,
    onClick && _react2.default.createElement(
      StyledLink,
      { onClick: onClick, href: null },
      displayImage(image, iconClass),
      _react2.default.createElement(
        StyledSpan,
        null,
        title
      )
    ),
    !onClick && href && _react2.default.createElement(
      StyledLink,
      { href: href },
      displayImage(image, iconClass),
      _react2.default.createElement(
        StyledSpan,
        null,
        title
      )
    )
  );
};

NavItem.propTypes = {
  title: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  href: _propTypes2.default.string,
  image: _propTypes2.default.string,
  iconClass: _propTypes2.default.string
};

exports.default = NavItem;