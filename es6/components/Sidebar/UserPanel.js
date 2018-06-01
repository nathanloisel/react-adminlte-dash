'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-right: 3px;\n  color: ', ';\n'], ['\n  margin-right: 3px;\n  color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin: 0 0 9px 0;\n  font-weight: 600;\n'], ['\n  margin: 0 0 9px 0;\n  font-weight: 600;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  text-decoration: none !important;\n  padding-right: 5px;\n  margin-top: 3px;\n  font-size: 11px;\n  background-color: transparent;\n  color: ', ' !important;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n'], ['\n  text-decoration: none !important;\n  padding-right: 5px;\n  margin-top: 3px;\n  font-size: 11px;\n  background-color: transparent;\n  color: ', ' !important;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  color: ', ';\n  display: ', ';\n  float: left !important;\n  padding: 5px 5px 5px 15px;\n  line-height: 1;\n  position: absolute;\n  left: 55px;\n\n  /* collapse transform */\n  ', '\n'], ['\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  color: ', ';\n  display: ', ';\n  float: left !important;\n  padding: 5px 5px 5px 15px;\n  line-height: 1;\n  position: absolute;\n  left: 55px;\n\n  /* collapse transform */\n  ', '\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  display: block;\n  float: left!important;\n  width: 100%;\n  max-width: 45px;\n  vertical-align: middle;\n  height: auto;\n  border-radius: 50%;\n  border: 0;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n'], ['\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  display: block;\n  float: left!important;\n  width: 100%;\n  max-width: 45px;\n  vertical-align: middle;\n  height: auto;\n  border-radius: 50%;\n  border: 0;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  box-sizing: border-box;\n\n  position: relative;\n  width: 100%;\n  padding: 10px;\n  overflow: hidden;\n  display: block;\n  white-space: nowrap;\n'], ['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  box-sizing: border-box;\n\n  position: relative;\n  width: 100%;\n  padding: 10px;\n  overflow: hidden;\n  display: block;\n  white-space: nowrap;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../../styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


var StyledIcon = _styledComponents2.default.i(_templateObject, function (props) {
  return props.online ? '#3c763d' : '#a94442';
});

var StyledP = _styledComponents2.default.p(_templateObject2);

var StyledLink = _styledComponents2.default.a(_templateObject3, function (props) {
  return props.theme.userPanelColor || '#fff';
});

var StyledInfo = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.theme.userPanelColor || '#fff';
}, function (props) {
  return props.collapse ? 'none !important' : 'block';
}, function (props) {
  return props.collapse && '-webkit-transform: translateZ(0);';
});

var StyledImage = _styledComponents2.default.img(_templateObject5);

var StyledPanel = _styledComponents2.default.div(_templateObject6, _variables.fontFamilyBase, _variables.fontWeightBase, _variables.fontSizeBase);

var UserPanel = function UserPanel(_ref) {
  var name = _ref.name,
      image = _ref.image,
      _ref$href = _ref.href,
      href = _ref$href === undefined ? null : _ref$href,
      online = _ref.online,
      collapse = _ref.collapse;
  return _react2.default.createElement(
    StyledPanel,
    { collapse: collapse },
    _react2.default.createElement(StyledImage, { src: image }),
    _react2.default.createElement(
      StyledInfo,
      { collapse: collapse },
      _react2.default.createElement(
        StyledP,
        null,
        name
      ),
      _react2.default.createElement(
        StyledLink,
        { href: href },
        _react2.default.createElement(StyledIcon, { className: 'fa fa-circle', online: online }),
        online ? ' Online' : ' Offline'
      )
    )
  );
};

process.env.NODE_ENV !== "production" ? UserPanel.propTypes = {
  name: _propTypes2.default.string,
  image: _propTypes2.default.string,
  href: _propTypes2.default.string,
  online: _propTypes2.default.bool,
  collapse: _propTypes2.default.bool
} : void 0;

exports.default = UserPanel;