'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

var _variables = require('./variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.assign({}, {
  headerBoxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
  navbarToggleColor: _variables.baseColor,
  navbarBrandColor: _variables.baseColor,
  navbarItemBorder: '1px solid #eee',
  navbarUserMenuHeaderBg: '#222',
  logoSmallVariant: '\n      background-color: #222;\n      color: ' + _variables.white + ';\n      border-bottom: 0 solid transparent;\n\n      &:hover {\n        background-color: ' + (0, _tinycolor2.default)('#222').darken(1).toString() + ';\n      }\n      '
}, (0, _variables.navbarVariant)(_variables.white, _variables.baseColor, '#999', _variables.white), (0, _variables.logoVariant)(_variables.white, _variables.baseColor), (0, _variables.sidebarVariant)(_variables.white, true));