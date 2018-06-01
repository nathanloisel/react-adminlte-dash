'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navbarItemVariant = exports.sidebarVariant = exports.logoVariant = exports.navbarVariant = exports.transitionFn = exports.transitionSpeed = exports.attachmentBorderRadius = exports.directChatDefaultMsgBorderColor = exports.directChatDefaultFontColor = exports.directChatDefaultMsgBg = exports.directChatHeight = exports.btnBorderRadius = exports.inputRadius = exports.progressBarXsBorderRadius = exports.progressBarSmBorderRadius = exports.progressBarBorderRadius = exports.btnBoxshadow = exports.boxDefaultBorderTopColor = exports.boxPadding = exports.boxBoxshadow = exports.boxFooterBg = exports.boxBorderRadius = exports.boxBorderColor = exports.controlSidebarWidth = exports.sidebarLightSubmenuHoverColor = exports.sidebarLightSubmenuColor = exports.sidebarLightSubmenuBg = exports.sidebarLightHoverColor = exports.sidebarLightColor = exports.sidebarLightHoverBg = exports.sidebarLightBg = exports.sidebarDarkSubmenuHoverColor = exports.sidebarDarkSubmenuColor = exports.sidebarDarkSubmenuBg = exports.sidebarDarkHoverColor = exports.sidebarDarkColor = exports.sidebarDarkHoverBg = exports.sidebarDarkBg = exports.linkHoverColor = exports.linkColor = exports.screenHeaderCollapse = exports.boxedLayoutMaxWidth = exports.sidebarMiniWidth = exports.sidebarWidth = exports.navbarPaddingVertical = exports.navbarPaddingHorizontal = exports.navbarHeight = exports.gridGutterWidth = exports.lineHeightComputed = exports.fontWeightBase = exports.lineHeightBase = exports.fontSizeBase = exports.fontFamilyBase = exports.screenMdMax = exports.screenSmMax = exports.screenXsMax = exports.screenLgMin = exports.screenMdMin = exports.screenSmMin = exports.screenXsMin = exports.white = exports.gray = exports.black = exports.maroon = exports.purple = exports.fuchsia = exports.orange = exports.lime = exports.olive = exports.teal = exports.navy = exports.blue = exports.yellow = exports.aqua = exports.green = exports.red = exports.lightBlue = exports.baseColor = undefined;

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// COLORS
// --------------------------------------------------------
var baseColor = exports.baseColor = '#333';
// Primary
/* eslint-disable import/prefer-default-export */
var lightBlue = exports.lightBlue = '#3c8dbc';
// Danger
var red = exports.red = '#dd4b39';
// Success
var green = exports.green = '#00a65a';
// Info
var aqua = exports.aqua = '#00c0ef';
// Warning
var yellow = exports.yellow = '#f39c12';
var blue = exports.blue = '#0073b7';
var navy = exports.navy = '#001f3f';
var teal = exports.teal = '#39cccc';
var olive = exports.olive = '#3d9970';
var lime = exports.lime = '#01ff70';
var orange = exports.orange = '#ff851b';
var fuchsia = exports.fuchsia = '#f012be';
var purple = exports.purple = '#605ca8';
var maroon = exports.maroon = '#d81b60';
var black = exports.black = '#111';
var gray = exports.gray = '#d2d6de';
var white = exports.white = '#fff';

// LAYOUT
// --------------------------------------------------------

// BOOTSTRAP
// Screen sizes
// Extra small screen
var screenXsMin = exports.screenXsMin = '500px';
// Small screen / tablet
var screenSmMin = exports.screenSmMin = '768px';
// Medium screen / desktop
var screenMdMin = exports.screenMdMin = '992px';
// Large screen / wide desktop
var screenLgMin = exports.screenLgMin = '1200px';
// So media queries don't overlap when required, provide a maximum
var screenXsMax = exports.screenXsMax = parseInt(screenSmMin, 10) - 1 + 'px';
var screenSmMax = exports.screenSmMax = parseInt(screenMdMin, 10) - 1 + 'px';
var screenMdMax = exports.screenMdMax = parseInt(screenLgMin, 10) - 1 + 'px';
// Boostrap sizing
var fontFamilyBase = exports.fontFamilyBase = "'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif";
var fontSizeBase = exports.fontSizeBase = '14px';
var lineHeightBase = exports.lineHeightBase = 1.428571429;
var fontWeightBase = exports.fontWeightBase = '400';
var lineHeightComputed = exports.lineHeightComputed = Math.floor(parseInt(fontSizeBase, 10) * lineHeightBase) + 'px';
var gridGutterWidth = exports.gridGutterWidth = '30px';

// Navbar heights
var navbarHeight = exports.navbarHeight = '50px';
var navbarPaddingHorizontal = exports.navbarPaddingHorizontal = Math.floor(parseInt(gridGutterWidth, 10) / 2) + 'px';
var navbarPaddingVertical = exports.navbarPaddingVertical = (parseInt(navbarHeight, 10) - parseInt(lineHeightComputed, 10)) / 2 + 'px';
// Side bar and logo width
var sidebarWidth = exports.sidebarWidth = '230px';
var sidebarMiniWidth = exports.sidebarMiniWidth = '50px';
// Boxed layout maximum width
var boxedLayoutMaxWidth = exports.boxedLayoutMaxWidth = '1024px';
// When the logo should go to the top of the screen
var screenHeaderCollapse = exports.screenHeaderCollapse = screenXsMax;

// Link colors (Aka = <a> tags)
var linkColor = exports.linkColor = lightBlue;
var linkHoverColor = exports.linkHoverColor = (0, _tinycolor2.default)(linkColor).lighten(15).toString();

// SIDEBAR SKINS
// --------------------------------------------------------

// Dark sidebar
var sidebarDarkBg = exports.sidebarDarkBg = '#222d32';
var sidebarDarkHoverBg = exports.sidebarDarkHoverBg = (0, _tinycolor2.default)(sidebarDarkBg).darken(2).toString();
var sidebarDarkColor = exports.sidebarDarkColor = (0, _tinycolor2.default)(sidebarDarkBg).lighten(60).toString();
var sidebarDarkHoverColor = exports.sidebarDarkHoverColor = '#fff';
var sidebarDarkSubmenuBg = exports.sidebarDarkSubmenuBg = (0, _tinycolor2.default)(sidebarDarkBg).lighten(5).toString();
var sidebarDarkSubmenuColor = exports.sidebarDarkSubmenuColor = (0, _tinycolor2.default)(sidebarDarkSubmenuBg).lighten(40).toString();
var sidebarDarkSubmenuHoverColor = exports.sidebarDarkSubmenuHoverColor = '#fff';

// Light sidebar
var sidebarLightBg = exports.sidebarLightBg = '#f9fafc';
var sidebarLightHoverBg = exports.sidebarLightHoverBg = (0, _tinycolor2.default)('#f0f0f1').lighten(1.5).toString();
var sidebarLightColor = exports.sidebarLightColor = '#444';
var sidebarLightHoverColor = exports.sidebarLightHoverColor = '#000';
var sidebarLightSubmenuBg = exports.sidebarLightSubmenuBg = sidebarLightHoverBg;
var sidebarLightSubmenuColor = exports.sidebarLightSubmenuColor = '#777';
var sidebarLightSubmenuHoverColor = exports.sidebarLightSubmenuHoverColor = '#000';

// CONTROL SIDEBAR
//--------------------------------------------------------
var controlSidebarWidth = exports.controlSidebarWidth = sidebarWidth;

// BOXES
//--------------------------------------------------------
var boxBorderColor = exports.boxBorderColor = '#f4f4f4';
var boxBorderRadius = exports.boxBorderRadius = '3px';
var boxFooterBg = exports.boxFooterBg = '#fff';
var boxBoxshadow = exports.boxBoxshadow = '0 1px 1px rgba(0, 0, 0, .1)';
var boxPadding = exports.boxPadding = '10px';

// Box variants
var boxDefaultBorderTopColor = exports.boxDefaultBorderTopColor = '#d2d6de';

// BUTTONS
//--------------------------------------------------------
var btnBoxshadow = exports.btnBoxshadow = 'none';

// PROGRESS BARS
//--------------------------------------------------------
var progressBarBorderRadius = exports.progressBarBorderRadius = '1px';
var progressBarSmBorderRadius = exports.progressBarSmBorderRadius = '1px';
var progressBarXsBorderRadius = exports.progressBarXsBorderRadius = '1px';

// FORMS
//--------------------------------------------------------
var inputRadius = exports.inputRadius = '0';

// BUTTONS
//--------------------------------------------------------

// Border radius for non flat buttons
var btnBorderRadius = exports.btnBorderRadius = '3px';

// DIRECT CHAT
//--------------------------------------------------------
var directChatHeight = exports.directChatHeight = '250px';
var directChatDefaultMsgBg = exports.directChatDefaultMsgBg = gray;
var directChatDefaultFontColor = exports.directChatDefaultFontColor = '#444';
var directChatDefaultMsgBorderColor = exports.directChatDefaultMsgBorderColor = gray;

// CHAT WIDGET
//--------------------------------------------------------
var attachmentBorderRadius = exports.attachmentBorderRadius = '3px';

// TRANSITIONS SETTINGS
//--------------------------------------------------------

// Transition global options
var transitionSpeed = exports.transitionSpeed = '.3s';
var transitionFn = exports.transitionFn = 'ease-in-out';

// MIXINS
//--------------------------------------------------------
var navbarVariant = exports.navbarVariant = function navbarVariant(color) {
  var fontColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgba(255, 255, 255, 0.8)';
  var hoverColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#f6f6f6';
  var hoverBg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'rgba(0, 0, 0, 0.1)';
  return {
    backgroundColor: color,
    navbarFontColor: fontColor,
    navbarHoverColor: hoverColor,
    navbarHoverBg: hoverBg
  };
};

var logoVariant = exports.logoVariant = function logoVariant(bgColor) {
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#fff';
  var borderBottomColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'transparent';
  var borderBottomWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '0';
  return {
    logoBgColor: bgColor,
    logoColor: color,
    logoBorderBottom: borderBottomWidth + ' solid ' + borderBottomColor,
    logoHover: (0, _tinycolor2.default)(bgColor).darken(1).toString()
  };
};

var sidebarVariant = exports.sidebarVariant = function sidebarVariant(color) {
  var light = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return !light ? {
    sidebarBg: sidebarDarkBg,
    userPanelColor: '#fff',
    sidebarHeaderColor: (0, _tinycolor2.default)(sidebarDarkBg).lighten(20).toString(),
    sidebarHeaderBg: (0, _tinycolor2.default)(sidebarDarkBg).darken(4).toString(),
    sidebarLinkColor: sidebarDarkColor,
    sidebarLinkBorderLeft: '3px solid transparent',
    sidebarLinkActiveColor: sidebarDarkHoverColor,
    sidebarLinkActiveBg: sidebarDarkHoverBg,
    sidebarLinkActiveBorderLeftColor: color,
    sidebarLinkHoverDec: 'none',
    sidebarSubmenuMargin: '0 1px',
    sidebarSubmenuBg: sidebarDarkSubmenuBg,
    sidebarSubmenuLinkColor: sidebarDarkSubmenuColor,
    sidebarSubmenuLinkHoverColor: sidebarDarkSubmenuHoverColor,
    sidebarFormBorderRadius: '3px',
    sidebarFormBorder: '1px solid ' + (0, _tinycolor2.default)(sidebarDarkBg).lighten(10).toString(),
    sidebarFormMargin: '10px 10px',
    sidebarFormInputBoxShadow: 'none',
    sidebarFormInputBg: (0, _tinycolor2.default)(sidebarDarkBg).lighten(10).toString(),
    sidebarFormInputBorder: '1px solid transparent',
    sidebarFormInputHeight: '35px',
    sidebarFormInputColor: '#666',
    sidebarFormInputBorderRadius: '2px 0 0 2px',
    sidebarFormInputFocusBg: '#fff',
    sidebarFormInputFocusColor: '#666',
    sidebarFormInputFocusBorderLeftColor: '#fff',
    sidebarFormButtonColor: '#999',
    sidebarFormButtonBorderRadius: '0 2px 2px 0'
  } : {
    sidebarBg: sidebarLightBg,
    contentLeftBorder: '1px solid ' + gray,
    footerLeftBorder: '1px solid ' + gray,
    userPanelColor: sidebarLightColor,
    sidebarHeaderColor: (0, _tinycolor2.default)(sidebarLightColor).lighten(25).toString(),
    sidebarHeaderBg: sidebarLightBg,
    sidebarLinkColor: sidebarLightColor,
    sidebarLinkTransition: 'border-left-color .3s ease',
    sidebarLinkBorderLeft: '3px solid transparent',
    sidebarLinkFontWeight: '600',
    sidebarLinkActiveColor: sidebarLightHoverColor,
    sidebarLinkActiveBg: sidebarLightHoverBg,
    sidebarLinkActiveBorderLeftColor: color,
    sidebarLinkActiveFontWeight: '600',
    sidebarLinkHoverDec: 'none',
    sidebarSubmenuBg: sidebarLightSubmenuBg,
    sidebarFormBorderRadius: '3px',
    sidebarFormBorder: '1px solid ' + gray,
    sidebarFormMargin: '10px 10px',
    sidebarFormInputBoxShadow: 'none',
    sidebarFormInputBg: '#fff',
    sidebarFormInputBorder: '1px solid transparent',
    sidebarFormInputHeight: '35px',
    sidebarFormInputColor: '#666',
    sidebarFormInputBorderRadius: '2px 0 2px 0',
    sidebarFormInputFocusBg: '#fff',
    sidebarFormInputFocusColor: '#666',
    sidebarFormInputFocusBorderLeftColor: '#fff',
    sidebarFormButtonColor: '#999',
    sidebarFormButtonBorderRadius: '0 2px 0 2px',
    sidebarSubmenuLgBorderLeft: '1px solid ' + gray
  };
};

var navbarItemVariant = exports.navbarItemVariant = function navbarItemVariant(color) {
  var dividerColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgba(255, 255, 255, 0.1)';
  var itemLinkColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#fff';
  return {
    navbarItemDividerBg: dividerColor,
    navbarItemLinkColor: itemLinkColor,
    navbarItemLinkHoverBg: (0, _tinycolor2.default)(color).darken(5).toString()
  };
};