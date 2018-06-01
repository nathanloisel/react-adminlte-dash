'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  display: inline;\n  padding: .2em .6em .3em .6em;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n  float: right!important;\n  color: #fff;\n  margin-right: 5px;\n\n  /* ----- color ----- */\n  background-color: ', ';\n\n  /* ----- collapse ----- */\n  ', '\n'], ['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  display: inline;\n  padding: .2em .6em .3em .6em;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n  float: right!important;\n  color: #fff;\n  margin-right: 5px;\n\n  /* ----- color ----- */\n  background-color: ', ';\n\n  /* ----- collapse ----- */\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  margin-top: -7px;\n\n  color: ', ';\n\n  /* ----- hover ----- */\n  ', '\n'], ['\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  margin-top: -7px;\n\n  color: ', ';\n\n  /* ----- hover ----- */\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n\n  /* collapse */\n  ', '\n'], ['\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n\n  /* collapse */\n  ', '\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: auto;\n  height: auto;\n  padding: 0;\n  margin-right: 10px;\n  margin-left: .3em;\n  float: right;\n\n  ', '\n\n  /* ----- collapse ----- */\n  ', ';\n'], ['\n  width: auto;\n  height: auto;\n  padding: 0;\n  margin-right: 10px;\n  margin-left: .3em;\n  float: right;\n\n  ', '\n\n  /* ----- collapse ----- */\n  ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  width: 20px;\n\n  /* ----- color ----- */\n  ', ';\n'], ['\n  width: 20px;\n\n  /* ----- color ----- */\n  ', ';\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  cursor: auto;\n  text-decoration: none !important;\n  display: block;\n  padding: ', ';\n  position: relative;\n  margin: 0;\n  font-size: ', ';\n  background-color: transparent;\n\n  &:active,\n  &:focus,\n  &:hover {\n    outline: none !important;\n    text-decoration: none !important;\n  }\n\n  /* ----- theme ----- */\n  /* text color - different in submenu */\n  color: ', ' !important;\n  /* left border - none in submenu */\n  border-left: ', ';\n  /* transition */\n  ', '\n  /* font weight */\n  ', '\n\n  /* ----- active or hover properties ----- */\n  ', '\n'], ['\n  cursor: auto;\n  text-decoration: none !important;\n  display: block;\n  padding: ', ';\n  position: relative;\n  margin: 0;\n  font-size: ', ';\n  background-color: transparent;\n\n  &:active,\n  &:focus,\n  &:hover {\n    outline: none !important;\n    text-decoration: none !important;\n  }\n\n  /* ----- theme ----- */\n  /* text color - different in submenu */\n  color: ', ' !important;\n  /* left border - none in submenu */\n  border-left: ', ';\n  /* transition */\n  ', '\n  /* font weight */\n  ', '\n\n  /* ----- active or hover properties ----- */\n  ', '\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  display: ', ';\n  list-style: none;\n  padding: 0 0 0 ', 'px;\n\n  /* ----- theme ----- */\n  margin: ', ';\n  background-color: ', ';\n\n  /* ----- collapse ----- */\n  ', '\n  ', '\n'], ['\n  display: ', ';\n  list-style: none;\n  padding: 0 0 0 ', 'px;\n\n  /* ----- theme ----- */\n  margin: ', ';\n  background-color: ', ';\n\n  /* ----- collapse ----- */\n  ', '\n  ', '\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  list-style: none;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n  display: list-item;\n  text-align: -webkit-match-parent;\n'], ['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  list-style: none;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n  display: list-item;\n  text-align: -webkit-match-parent;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

var _variables = require('../../styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


var Label = _styledComponents2.default.div(_templateObject, _variables.fontFamilyBase, function (props) {
  switch (props.type) {
    case 'primary':
      return _variables.lightBlue;
    case 'success':
      return _variables.green;
    case 'danger':
      return _variables.red;
    case 'warning':
      return _variables.yellow;
    case 'information':
      return _variables.aqua;
    default:
      return _variables.lightBlue;
  }
}, function (props) {
  return props.collapse && '\n    display: ' + (props.hover ? 'block' : 'none') + ';\n    float: right;\n  ';
});

var RightSpan = _styledComponents2.default.span(_templateObject2, function (props) {
  return props.theme.sidebarLinkColor || '#fff';
}, function (props) {
  return props.collapse && props.hover && !props.level && '\n    display: block;\n    left: ' + (parseInt(_variables.sidebarWidth, 10) - 30) + 'px;\n    top: 10px!important;\n    margin-left: -3px;\n    padding: 12px 5px 12px 20px;\n    float: right;\n    overflow-x: visible;\n  ';
});

var StyledTitle = _styledComponents2.default.span(_templateObject3, function (props) {
  return !props.level && props.collapse && '@media (min-width: ' + _variables.screenSmMin + ') {\n      border-top-right-radius: 4px;\n      ' + (props.hover ? '\n          display: block !important;\n          position: absolute;\n          width: ' + (parseInt(_variables.sidebarWidth, 10) - parseInt(_variables.sidebarMiniWidth, 10)) + 'px;\n          left: ' + _variables.sidebarMiniWidth + ';\n          top: 0;\n          margin-left: -3px;\n          padding: 12px 5px 12px 20px;\n          background-color: inherit;\n        ' : '\n          display: none !important;\n          -webkit-transform: translateZ(0);\n        ') + '\n    }';
});

var StyledRightIcon = _styledComponents2.default.i(_templateObject4, function (props) {
  return props.open && '\n    -ms-transform: rotate(-90deg);\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n  ';
}, function (props) {
  return props.collapse && !props.hover && 'display: none !important;';
});

var StyledLeftIcon = _styledComponents2.default.i(_templateObject5, function (props) {
  switch (props.color) {
    case 'primary':
      return 'color: ' + _variables.lightBlue + ';';
    case 'success':
      return 'color: ' + _variables.green + ';';
    case 'danger':
      return 'color: ' + _variables.red + ';';
    case 'warning':
      return 'color: ' + _variables.yellow + ';';
    case 'information':
      return 'color: ' + _variables.aqua + ';';
    default:
      {
        var c = (0, _tinycolor2.default)(props.color);
        return c.isValid() ? 'color: ' + c.toString() + ';' : null;
      }
  }
});

var StyledLink = _styledComponents2.default.a(_templateObject6, function (props) {
  return !props.level ? '12px 5px 12px 15px' : '5px 5px 5px 15px';
}, _variables.fontSizeBase, function (props) {
  return props.level ? props.theme.sidebarSubmenuLinkColor : props.theme.sidebarLinkColor;
}, function (props) {
  return !props.level ? props.theme.sidebarLinkBorderLeft : 'none';
}, function (props) {
  return props.theme.sidebarLinkTransition && '\n    -webkit-transition: ' + props.theme.sidebarLinkTransition + ';\n    -moz-transition: ' + props.theme.sidebarLinkTransition + ';\n    -o-transition: ' + props.theme.sidebarLinkTransition + ';\n    transition: ' + props.theme.sidebarLinkTransition + ';\n  ';
}, function (props) {
  return props.theme.sidebarLinkFontWeight && '\n    font-weight: ' + props.theme.sidebarLinkFontWeight + ';\n  ';
}, function (props) {
  return (props.active || props.hover) && '\n    color: ' + (props.theme.sidebarLinkActiveColor || '#fff') + ' !important;\n    background: ' + (!props.level && props.theme.sidebarLinkActiveBg) + ';\n    border-left-color: ' + (props.theme.sidebarLinkActiveBorderLeftColor || '#3c8dbc') + ';\n    font-weight: ' + (props.theme.sidebarLinkActiveFontWeight || 'normal') + ';\n    text-decoration: none !important;\n  ';
});

var StyledSubMenu = _styledComponents2.default.ul(_templateObject7, function (props) {
  return props.open ? 'block' : 'none';
}, function (props) {
  return (props.level + 1) * 5;
}, function (props) {
  return props.theme.sidebarSubmenuMargin || '0';
}, function (props) {
  return props.theme.sidebarSubmenuBg || '#222d32';
}, function (props) {
  return props.collapse && '@media (min-width: ' + _variables.screenSmMin + ') {\n      ' + (props.theme.sidebarSubmenuLgBorderLeft && 'border-left: ' + props.theme.sidebarSubmenuLgBorderLeft) + '\n    }';
}, function (props) {
  return props.collapse && props.open && !props.level && '@media (min-width: ' + _variables.screenSmMin + ') {\n      position: absolute;\n      width: ' + (parseInt(_variables.sidebarWidth, 10) - 50) + 'px;\n      left: ' + _variables.sidebarMiniWidth + ';\n      top: 44px;\n      margin-left: 0;\n      border-bottom-right-radius: 4px;\n      ' + (props.theme.sidebarSubmenuLgBorderLeft && 'border-left: ' + props.theme.sidebarSubmenuLgBorderLeft) + '\n    }';
});

var StyledMenuItem = _styledComponents2.default.li(_templateObject8, _variables.fontFamilyBase, _variables.fontWeightBase, _variables.fontSizeBase, _variables.lineHeightBase);

var renderChildren = function renderChildren(children, sidebarCollapse, level, hover) {
  var newLevel = level + 1;
  return _react2.default.Children.map(children, function (child, index) {
    return _react2.default.cloneElement(child, {
      key: index.toString(),
      collapse: sidebarCollapse,
      level: newLevel,
      parentHover: hover
    });
  });
};

var renderLabels = function renderLabels(labels, collapse, hover) {
  return labels.map(function (l) {
    if (l.key && l.type && l.text) {
      if (l.key === 1) {
        return _react2.default.createElement(
          Label,
          {
            collapse: collapse,
            hover: hover,
            key: l.key.toString(),
            type: l.type
          },
          l.text
        );
      } else if (!collapse) {
        return _react2.default.createElement(
          Label,
          {
            collapse: collapse,
            hover: hover,
            key: l.key.toString(),
            type: l.type
          },
          l.text
        );
      }
    }
    return null;
  });
};

var MenuItem = function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  function MenuItem(props) {
    _classCallCheck(this, MenuItem);

    var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));

    _this.state = {
      open: false,
      hover: false
    };
    _this._toggleMenu = _this.toggleMenu.bind(_this);
    _this._toggleHover = _this.toggleHover.bind(_this);
    return _this;
  }

  _createClass(MenuItem, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      nextProps.collapse !== this.props.collapse && this.setState({ open: false });
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      this.props.children && this.setState({ open: !this.state.open });
    }
  }, {
    key: 'toggleHover',
    value: function toggleHover(state) {
      this.setState({ hover: state });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        StyledMenuItem,
        {
          collapse: this.props.collapse,
          hover: this.props.parentHover,
          level: this.props.level,
          onMouseLeave: function onMouseLeave() {
            return _this2._toggleHover(false);
          }
        },
        _react2.default.createElement(
          StyledLink,
          {
            active: this.props.active,
            collapse: this.props.collapse,
            hover: this.state.hover,
            href: this.props.children || this.props.onClick ? null : this.props.href,
            level: this.props.level,
            onClick: this.props.children ? this._toggleMenu : this.props.onClick,
            onMouseEnter: function onMouseEnter() {
              return _this2._toggleHover(true);
            }
          },
          _react2.default.createElement(StyledLeftIcon, {
            className: 'fa ' + (this.props.icon.className || 'fa-circle-o'),
            color: this.props.icon.color || 'none'
          }),
          _react2.default.createElement(
            StyledTitle,
            {
              collapse: this.props.collapse,
              hover: this.state.hover,
              level: this.props.level
            },
            this.props.title
          ),
          _react2.default.createElement(
            RightSpan,
            {
              collapse: this.props.collapse,
              hover: this.state.hover,
              level: this.props.level
            },
            this.props.labels ? renderLabels(this.props.labels, this.props.collapse, this.state.hover) : this.props.children && _react2.default.createElement(StyledRightIcon, {
              className: 'fa fa-angle-left',
              open: this.state.open,
              collapse: this.props.collapse,
              hover: this.state.hover
            })
          )
        ),
        this.props.children && _react2.default.createElement(
          StyledSubMenu,
          {
            collapse: this.props.collapse,
            hover: this.state.hover,
            level: this.props.level,
            open: this.state.open
          },
          renderChildren(this.props.children, this.props.collapse, this.props.level, this.state.hover || this.props.parentHover)
        )
      );
    }
  }]);

  return MenuItem;
}(_react2.default.Component);

process.env.NODE_ENV !== "production" ? MenuItem.propTypes = {
  children: _propTypes2.default.node,
  active: _propTypes2.default.bool,
  collapse: _propTypes2.default.bool,
  icon: _propTypes2.default.objectOf(_propTypes2.default.string),
  href: _propTypes2.default.string,
  labels: _propTypes2.default.arrayOf(_propTypes2.default.object),
  level: _propTypes2.default.number,
  onClick: _propTypes2.default.func,
  parentHover: _propTypes2.default.bool,
  title: _propTypes2.default.string
} : void 0;

MenuItem.defaultProps = {
  collapse: false,
  icon: { className: 'fa-circle-o' },
  href: null,
  level: 0,
  parentHover: false,
  title: 'Title'
};

exports.default = MenuItem;