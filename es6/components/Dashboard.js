var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* theme */\n  ', '\n\n  min-height: 100vh;\n  position: relative;\n  overflow: hidden;\n\n  ', '\n'], ['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* theme */\n  ', '\n\n  min-height: 100vh;\n  position: relative;\n  overflow: hidden;\n\n  ', '\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';
import themes from '../styles';

import { boxedLayoutMaxWidth } from '../styles/variables';

var StyledDashboard = styled.div(_templateObject, function (props) {
  return props.theme.sidebarBg && 'background-color: ' + props.theme.sidebarBg + ';';
}, function (props) {
  return props.boxed && '\n    max-width: ' + boxedLayoutMaxWidth + ';\n    margin: 0 auto;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);\n    position: relative;\n  ';
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
      var theme = themes[this.props.theme];
      return React.createElement(
        StyledDashboard,
        null,
        React.createElement(
          ThemeProvider,
          { theme: theme },
          React.createElement(
            Header,
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
        React.createElement(
          ThemeProvider,
          { theme: theme },
          React.createElement(
            Sidebar,
            {
              fixed: this.props.fixed,
              sidebarCollapse: this.state.sidebarCollapse,
              sidebarMini: this.props.sidebarMini
            },
            this.props.sidebarChildren
          )
        ),
        React.createElement(
          ThemeProvider,
          { theme: theme },
          React.createElement(
            Content,
            {
              fixed: this.props.fixed,
              name: 'content-wrapper',
              sidebarCollapse: this.state.sidebarCollapse,
              sidebarMini: this.props.sidebarMini
            },
            this.props.children
          )
        ),
        React.createElement(
          ThemeProvider,
          { theme: theme },
          React.createElement(
            Footer,
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
}(React.Component);

process.env.NODE_ENV !== "production" ? Dashboard.propTypes = {
  children: PropTypes.node,
  logoOnClick: PropTypes.func,
  logoHref: PropTypes.string,
  logoLg: PropTypes.element,
  logoSm: PropTypes.element,
  navbarChildren: PropTypes.node,
  sidebarChildren: PropTypes.node,
  footerChildren: PropTypes.node,
  fixed: PropTypes.bool,
  sidebarMini: PropTypes.bool,
  initialCollapse: PropTypes.bool,
  theme: PropTypes.string
} : void 0;

Dashboard.defaultProps = {
  fixed: false,
  initialCollapse: false,
  sidebarMini: false,
  theme: 'skin-blue'
};

export default Dashboard;