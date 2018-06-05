'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  cursor: pointer;\n  user-select: none;\n'], ['\n  cursor: pointer;\n  user-select: none;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  z-index: 2;\n  margin-left: -1px;\n  font-size: ', ';\n  padding: 6px 12px;\n  background-image: none;\n  font-family: ', ';\n  line-height: ', ';\n  overflow: visible;\n  position: relative;\n  cursor: pointer;\n  vertical-align: middle;\n  touch-action: manipulation;\n  user-select: none;\n\n  /* theme */\n  color: ', ';\n  border-radius: ', ';\n  box-shadow: ', ';\n  background-color: ', ';\n  border: ', ';\n  height: ', ';\n'], ['\n  z-index: 2;\n  margin-left: -1px;\n  font-size: ', ';\n  padding: 6px 12px;\n  background-image: none;\n  font-family: ', ';\n  line-height: ', ';\n  overflow: visible;\n  position: relative;\n  cursor: pointer;\n  vertical-align: middle;\n  touch-action: manipulation;\n  user-select: none;\n\n  /* theme */\n  color: ', ';\n  border-radius: ', ';\n  box-shadow: ', ';\n  background-color: ', ';\n  border: ', ';\n  height: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n  width: 1%;\n  vertical-align: middle;\n  display: table-cell;\n'], ['\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n  width: 1%;\n  vertical-align: middle;\n  display: table-cell;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  -webkit-writing-mode: horizontal-tb;\n  -webkit-rtl-ordering: logical;\n  user-select: text;\n  cursor: auto;\n  text-rendering: auto;\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  text-align: start;\n  background-image: none;\n\n  margin: 0;\n  font: inherit;\n  font-family: inherit;\n\n  /* form-control */\n  padding: 6px 12px;\n  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n\n  &:not(select) {\n    -webkit-appearance: none;\n  }\n\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n  display: table-cell;\n\n  /* theme */\n  box-shadow: ', ';\n  background-color: ', ';\n  border: ', ';\n  height: ', ';\n  color: ', ';\n  border-radius: ', ';\n\n  &:focus {\n    background-color: ', ';\n    color: ', ';\n    border-left-color: ', ';\n  }\n'], ['\n  -webkit-writing-mode: horizontal-tb;\n  -webkit-rtl-ordering: logical;\n  user-select: text;\n  cursor: auto;\n  text-rendering: auto;\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  text-align: start;\n  background-image: none;\n\n  margin: 0;\n  font: inherit;\n  font-family: inherit;\n\n  /* form-control */\n  padding: 6px 12px;\n  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n\n  &:not(select) {\n    -webkit-appearance: none;\n  }\n\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n  display: table-cell;\n\n  /* theme */\n  box-shadow: ', ';\n  background-color: ', ';\n  border: ', ';\n  height: ', ';\n  color: ', ';\n  border-radius: ', ';\n\n  &:focus {\n    background-color: ', ';\n    color: ', ';\n    border-left-color: ', ';\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: relative;\n  display: table;\n  border-collapse: separate;\n\n  &:focus { outline: -webkit-focus-ring-color auto 5px; }\n'], ['\n  position: relative;\n  display: table;\n  border-collapse: separate;\n\n  &:focus { outline: -webkit-focus-ring-color auto 5px; }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  box-sizing: border-box;\n\n  overflow: hidden;\n  text-overflow: clip;\n  border-radius: ', ';\n  border: ', ';\n  margin: ', ';\n\n  /* collapse */\n  ', '\n'], ['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  box-sizing: border-box;\n\n  overflow: hidden;\n  text-overflow: clip;\n  border-radius: ', ';\n  border: ', ';\n  margin: ', ';\n\n  /* collapse */\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../../styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


var StyledIcon = _styledComponents2.default.i(_templateObject);

var StyledButton = _styledComponents2.default.button(_templateObject2, _variables.fontSizeBase, _variables.fontFamilyBase, _variables.lineHeightBase, function (props) {
  return props.theme.sidebarFormButtonColor;
}, function (props) {
  return props.theme.sidebarFormButtonBorderRadius;
}, function (props) {
  return props.theme.sidebarFormInputBoxShadow;
}, function (props) {
  return props.theme.sidebarFormInputBg;
}, function (props) {
  return props.theme.sidebarFormInputBorder;
}, function (props) {
  return props.theme.sidebarFormInputHeight;
});

var StyledInputButton = _styledComponents2.default.span(_templateObject3);

var StyledInput = _styledComponents2.default.input(_templateObject4, function (props) {
  return props.theme.sidebarFormInputBoxShadow;
}, function (props) {
  return props.theme.sidebarFormInputBg;
}, function (props) {
  return props.theme.sidebarFormInputBorder;
}, function (props) {
  return props.theme.sidebarFormInputHeight;
}, function (props) {
  return props.theme.sidebarFormInputColor;
}, function (props) {
  return props.theme.sidebarFormInputBorderRadius;
}, function (props) {
  return props.theme.sidebarFormInputFocusBg;
}, function (props) {
  return props.theme.sidebarFormInputFocusColor;
}, function (props) {
  return props.theme.sidebarFormInputFocusBorderLeftColor;
});

var InputGroup = _styledComponents2.default.div(_templateObject5);

var StyledForm = _styledComponents2.default.form(_templateObject6, _variables.fontFamilyBase, _variables.fontWeightBase, _variables.fontSizeBase, _variables.lineHeightBase, function (_ref) {
  var theme = _ref.theme;
  return theme.sidebarFormBorderRadius || '0';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.sidebarFormBorder || '0';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.sidebarFormMargin || '0';
}, function (_ref4) {
  var collapse = _ref4.collapse;
  return collapse && '\n    display: none !important;\n    transform: translateZ(0);\n  ';
});

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      value: ''
    };
    _this._changeValue = _this.changeValue.bind(_this);
    _this._buttonClick = _this.buttonClick.bind(_this);
    return _this;
  }

  _createClass(Search, [{
    key: 'changeValue',
    value: function changeValue(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'buttonClick',
    value: function buttonClick() {
      this.props.onClick(this.state.value);
      this.setState({ value: '' });
    }
  }, {
    key: 'getSearchIcon',
    value: function getSearchIcon() {
      var searchIcon = this.props.searchIcon;

      if (typeof searchIcon !== 'undefined') {
        if (typeof searchIcon === 'string') {
          return _react2.default.createElement(StyledIcon, { className: searchIcon });
        }
        return searchIcon;
      }
      return _react2.default.createElement(StyledIcon, { className: 'fa fa-search' });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          placeholder = _props.placeholder,
          collapse = _props.collapse;

      return _react2.default.createElement(
        StyledForm,
        { collapse: collapse },
        _react2.default.createElement(
          InputGroup,
          null,
          _react2.default.createElement(StyledInput, {
            type: 'text',
            name: name,
            placeholder: placeholder,
            value: this.state.value,
            onChange: this._changeValue
          }),
          _react2.default.createElement(
            StyledInputButton,
            null,
            _react2.default.createElement(
              StyledButton,
              { name: 'searchButton', onClick: this._buttonClick },
              this.getSearchIcon()
            )
          )
        )
      );
    }
  }]);

  return Search;
}(_react2.default.Component);

Search.propTypes = {
  name: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  collapse: _propTypes2.default.bool,
  searchIcon: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string])
};

Search.defaultProps = {
  placeholder: 'Search...',
  onClick: function onClick(v) {
    return alert('Searching for ' + v);
  },
  collapse: false
};

exports.default = Search;