'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  float: left;\n  border: 0;\n  vertical-align: middle;\n  width: ', ';\n  height: ', ';\n  border-radius: 50%;\n  margin-right: 10px;\n  margin-top: ', ';\n  margin-bottom: ', ';\n  max-width: none;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n'], ['\n  box-sizing: border-box;\n  float: left;\n  border: 0;\n  vertical-align: middle;\n  width: ', ';\n  height: ', ';\n  border-radius: 50%;\n  margin-right: 10px;\n  margin-top: ', ';\n  margin-bottom: ', ';\n  max-width: none;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n\n  @media (max-width: ', ') {\n    display: none;\n  }\n'], ['\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n\n  @media (max-width: ', ') {\n    display: none;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  background-color: ', ';\n  padding: 10px;\n  text-align: center;\n'], ['\n  background-color: ', ';\n  padding: 10px;\n  text-align: center;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  z-index: 5;\n  height: 90px;\n  width: 90px;\n  border: 3px solid;\n  border-color: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n'], ['\n  z-index: 5;\n  height: 90px;\n  width: 90px;\n  border: 3px solid;\n  border-color: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  z-index: 5;\n  color: #fff;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 17px;\n  margin-top: 10px;\n'], ['\n  z-index: 5;\n  color: #fff;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 17px;\n  margin-top: 10px;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  color: #666666;\n  box-shadow: none;\n  border: 1px solid transparent;\n  border-width: 1px;\n  border-radius: 0;\n  background-color: #f4f4f4;\n  border-color: #ddd;\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: ', ';\n  font-weight: ', ';\n  line-height: ', ';\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n\n  &:hover {\n    @media (max-width: ', ') {\n      background-color: #f9f9f9;\n    }\n  }\n'], ['\n  color: #666666;\n  box-shadow: none;\n  border: 1px solid transparent;\n  border-width: 1px;\n  border-radius: 0;\n  background-color: #f4f4f4;\n  border-color: #ddd;\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: ', ';\n  font-weight: ', ';\n  line-height: ', ';\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n\n  &:hover {\n    @media (max-width: ', ') {\n      background-color: #f9f9f9;\n    }\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before,\n  &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  background-color: #f9f9f9;\n  padding: 10px;\n'], ['\n  /* clearfix */\n  &:before,\n  &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  background-color: #f9f9f9;\n  padding: 10px;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  border-top-radius: 0;\n  border-top: 0;\n  padding: 1px 0 0 0;\n  width: 280px;\n'], ['\n  border-top-radius: 0;\n  border-top: 0;\n  padding: 1px 0 0 0;\n  width: 280px;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  box-sizing: border-box;\n\n  float: left;\n  background-color: transparent;\n  background-image: none;\n  border: none;\n  outline: none;\n  padding: ', ' ', ';\n  position: relative;\n  text-decoration: none;\n  cursor: pointer;\n  &:focus,\n  &:active {\n    background: transparent;\n  }\n\n  /* theme */\n  color: ', ';\n  border-left: ', ';\n  &:hover {\n    color: ', ';\n    background-color: ', ';\n  }\n\n  @media (max-width: ', ') {\n    padding: ', ' 5px;\n  }\n'], ['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  box-sizing: border-box;\n\n  float: left;\n  background-color: transparent;\n  background-image: none;\n  border: none;\n  outline: none;\n  padding: ', ' ', ';\n  position: relative;\n  text-decoration: none;\n  cursor: pointer;\n  &:focus,\n  &:active {\n    background: transparent;\n  }\n\n  /* theme */\n  color: ', ';\n  border-left: ', ';\n  &:hover {\n    color: ', ';\n    background-color: ', ';\n  }\n\n  @media (max-width: ', ') {\n    padding: ', ' 5px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _variables = require('../../styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


var imageSize = Math.floor(parseInt(_variables.navbarHeight, 10) / 2) + 'px';
var imageMarginTop = '-' + Math.ceil((parseInt(imageSize, 10) + parseInt(_variables.navbarPaddingHorizontal, 10) + parseInt(_variables.navbarPaddingVertical, 10) - parseInt(_variables.navbarHeight, 10)) / 2) + 'px';
var imageMarginBottom = '-' + Math.floor((parseInt(imageSize, 10) + parseInt(_variables.navbarPaddingHorizontal, 10) + parseInt(_variables.navbarPaddingVertical, 10) - parseInt(_variables.navbarHeight, 10)) / 2) + 'px';

var StyledUserImage = _styledComponents2.default.img(_templateObject, imageSize, imageSize, imageMarginTop, imageMarginBottom);

var StyledUserName = _styledComponents2.default.span(_templateObject2, _variables.screenXsMin);

var UserMenuHeader = _styledComponents2.default.li(_templateObject3, function (props) {
  return props.theme.navbarUserMenuHeaderBg || props.theme.backgroundColor;
});

var UserMenuHeaderImage = _styledComponents2.default.img(_templateObject4);

var UserMenuHeaderName = _styledComponents2.default.p(_templateObject5);

var UserFooterButton = _styledComponents2.default.button(_templateObject6, _variables.fontSizeBase, _variables.fontWeightBase, _variables.lineHeightBase, _variables.screenSmMax);

var UserFooter = _styledComponents2.default.li(_templateObject7);

var UserDropDown = (0, _styledComponents2.default)(_DropdownMenu2.default)(_templateObject8);

var StyledUserMenu = _styledComponents2.default.li(_templateObject9, _variables.fontFamilyBase, _variables.fontWeightBase, _variables.fontSizeBase, _variables.lineHeightBase, _variables.navbarPaddingVertical, _variables.navbarPaddingHorizontal, function (props) {
  return props.theme.navbarFontColor || '#fff';
}, function (props) {
  return props.theme.navbarItemBorder || 'none';
}, function (props) {
  return props.theme.navbarHoverColor || '#fff';
}, function (props) {
  return props.theme.logoBgColor || 'transparent';
}, _variables.screenXsMin, _variables.navbarPaddingVertical);

var UserMenu = function (_React$Component) {
  _inherits(UserMenu, _React$Component);

  function UserMenu(props) {
    _classCallCheck(this, UserMenu);

    var _this = _possibleConstructorReturn(this, (UserMenu.__proto__ || Object.getPrototypeOf(UserMenu)).call(this, props));

    _this.state = {
      open: false
    };
    _this._toggleMenu = _this.toggleMenu.bind(_this);
    _this._closeMenu = _this.closeMenu.bind(_this);
    return _this;
  }

  _createClass(UserMenu, [{
    key: 'toggleMenu',
    value: function toggleMenu() {
      this.setState({
        open: !this.state.open
      });
    }
  }, {
    key: 'closeMenu',
    value: function closeMenu() {
      this.setState({
        open: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          userImageRenderer = _props.userImageRenderer,
          headerImageRenderer = _props.headerImageRenderer,
          image = _props.image,
          profileAction = _props.profileAction,
          signOutAction = _props.signOutAction,
          name = _props.name,
          className = _props.className;

      return _react2.default.createElement(
        StyledUserMenu,
        {
          onClick: this._toggleMenu,
          onMouseLeave: this._closeMenu,
          className: className
        },
        userImageRenderer ? userImageRenderer(image) : _react2.default.createElement(StyledUserImage, { src: image }),
        _react2.default.createElement(
          StyledUserName,
          null,
          name
        ),
        _react2.default.createElement(
          UserDropDown,
          { open: this.state.open },
          _react2.default.createElement(
            UserMenuHeader,
            null,
            headerImageRenderer ? headerImageRenderer(image) : _react2.default.createElement(UserMenuHeaderImage, { src: image }),
            _react2.default.createElement(
              UserMenuHeaderName,
              null,
              name
            )
          ),
          _react2.default.createElement(
            UserFooter,
            null,
            profileAction && _react2.default.createElement(
              'div',
              { style: { float: 'left' } },
              _react2.default.createElement(
                UserFooterButton,
                { onClick: profileAction },
                'Profile'
              )
            ),
            signOutAction && _react2.default.createElement(
              'div',
              { style: { float: 'right' } },
              _react2.default.createElement(
                UserFooterButton,
                { onClick: signOutAction },
                'Sign Out'
              )
            )
          )
        )
      );
    }
  }]);

  return UserMenu;
}(_react2.default.Component);

process.env.NODE_ENV !== "production" ? UserMenu.propTypes = {
  name: _propTypes2.default.string,
  image: _propTypes2.default.string,
  className: _propTypes2.default.string,
  profileAction: _propTypes2.default.func,
  signOutAction: _propTypes2.default.func,
  headerImageRenderer: _propTypes2.default.func,
  userImageRenderer: _propTypes2.default.func
} : void 0;

exports.default = UserMenu;