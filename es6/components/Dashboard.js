'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* theme */\n  ', '\n\n  min-height: 100vh;\n  position: relative;\n  overflow: hidden;\n\n  ', '\n'], ['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* theme */\n  ', '\n\n  min-height: 100vh;\n  position: relative;\n  overflow: hidden;\n\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Sidebar = require('./Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

var _variables = require('../styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


var StyledDashboard = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.sidebarBg && 'background-color: ' + props.theme.sidebarBg + ';';
}, function (props) {
  return props.boxed && '\n    max-width: ' + _variables.boxedLayoutMaxWidth + ';\n    margin: 0 auto;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);\n    position: relative;\n  ';
});

var Dashboard = function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard(props) {
    _classCallCheck(this, Dashboard);

    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

    _this._sidebarToggle = _this.sidebarToggle.bind(_this);

    _this.state = {
      sidebarCollapse: _this.props.initialCollapse
    };
    return _this;
  }

  _createClass(Dashboard, [{
    key: 'sidebarToggle',
    value: function sidebarToggle() {
      this.setState({ sidebarCollapse: !this.state.sidebarCollapse });
    }
  }, {
    key: 'render',
    value: function render() {
      var theme = _styles2.default[this.props.theme];
      return _react2.default.createElement(
        StyledDashboard,
        null,
        _react2.default.createElement(
          _styledComponents.ThemeProvider,
          { theme: theme },
          _react2.default.createElement(
            _Header2.default,
            {
              logoOnClick: this.props.logoOnClick,
              logoHref: this.props.logoHref,
              logoLg: this.props.logoLg,
              logoSm: this.props.logoSm,
              fixed: this.props.fixed,
              sidebarToggle: this._sidebarToggle,
              sidebarCollapse: this.state.sidebarCollapse,
              sidebarMini: this.props.sidebarMini
            },
            this.props.navbarChildren
          )
        ),
        _react2.default.createElement(
          _styledComponents.ThemeProvider,
          { theme: theme },
          _react2.default.createElement(
            _Sidebar2.default,
            {
              fixed: this.props.fixed,
              sidebarCollapse: this.state.sidebarCollapse,
              sidebarMini: this.props.sidebarMini
            },
            this.props.sidebarChildren
          )
        ),
        _react2.default.createElement(
          _styledComponents.ThemeProvider,
          { theme: theme },
          _react2.default.createElement(
            _Content2.default,
            {
              fixed: this.props.fixed,
              name: 'content-wrapper',
              sidebarCollapse: this.state.sidebarCollapse,
              sidebarMini: this.props.sidebarMini
            },
            this.props.children
          )
        ),
        _react2.default.createElement(
          _styledComponents.ThemeProvider,
          { theme: theme },
          _react2.default.createElement(
            _Footer2.default,
            {
              sidebarCollapse: this.state.sidebarCollapse,
              sidebarMini: this.props.sidebarMini
            },
            this.props.footerChildren
          )
        )
      );
    }
  }]);

  return Dashboard;
}(_react2.default.Component);

process.env.NODE_ENV !== "production" ? Dashboard.propTypes = {
  children: _propTypes2.default.node,
  logoOnClick: _propTypes2.default.func,
  logoHref: _propTypes2.default.string,
  logoLg: _propTypes2.default.element,
  logoSm: _propTypes2.default.element,
  navbarChildren: _propTypes2.default.node,
  sidebarChildren: _propTypes2.default.node,
  footerChildren: _propTypes2.default.node,
  fixed: _propTypes2.default.bool,
  sidebarMini: _propTypes2.default.bool,
  initialCollapse: _propTypes2.default.bool,
  theme: _propTypes2.default.string
} : void 0;

Dashboard.defaultProps = {
  fixed: false,
  initialCollapse: false,
  sidebarMini: false,
  theme: 'skin-blue'
};

exports.default = Dashboard;