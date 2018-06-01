'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

var _variables = require('./variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.assign({}, (0, _variables.navbarVariant)(_variables.yellow, _variables.white), (0, _variables.logoVariant)((0, _tinycolor2.default)(_variables.yellow).darken(5).toString()), (0, _variables.sidebarVariant)(_variables.yellow), (0, _variables.navbarItemVariant)(_variables.yellow));