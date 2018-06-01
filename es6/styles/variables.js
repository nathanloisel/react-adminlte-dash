/* eslint-disable import/prefer-default-export */
import tinycolor from 'tinycolor2';

// COLORS
// --------------------------------------------------------
export var baseColor = '#333';
// Primary
export var lightBlue = '#3c8dbc';
// Danger
export var red = '#dd4b39';
// Success
export var green = '#00a65a';
// Info
export var aqua = '#00c0ef';
// Warning
export var yellow = '#f39c12';
export var blue = '#0073b7';
export var navy = '#001f3f';
export var teal = '#39cccc';
export var olive = '#3d9970';
export var lime = '#01ff70';
export var orange = '#ff851b';
export var fuchsia = '#f012be';
export var purple = '#605ca8';
export var maroon = '#d81b60';
export var black = '#111';
export var gray = '#d2d6de';
export var white = '#fff';

// LAYOUT
// --------------------------------------------------------

// BOOTSTRAP
// Screen sizes
// Extra small screen
export var screenXsMin = '500px';
// Small screen / tablet
export var screenSmMin = '768px';
// Medium screen / desktop
export var screenMdMin = '992px';
// Large screen / wide desktop
export var screenLgMin = '1200px';
// So media queries don't overlap when required, provide a maximum
export var screenXsMax = parseInt(screenSmMin, 10) - 1 + 'px';
export var screenSmMax = parseInt(screenMdMin, 10) - 1 + 'px';
export var screenMdMax = parseInt(screenLgMin, 10) - 1 + 'px';
// Boostrap sizing
export var fontFamilyBase = "'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif";
export var fontSizeBase = '14px';
export var lineHeightBase = 1.428571429;
export var fontWeightBase = '400';
export var lineHeightComputed = Math.floor(parseInt(fontSizeBase, 10) * lineHeightBase) + 'px';
export var gridGutterWidth = '30px';

// Navbar heights
export var navbarHeight = '50px';
export var navbarPaddingHorizontal = Math.floor(parseInt(gridGutterWidth, 10) / 2) + 'px';
export var navbarPaddingVertical = (parseInt(navbarHeight, 10) - parseInt(lineHeightComputed, 10)) / 2 + 'px';
// Side bar and logo width
export var sidebarWidth = '230px';
export var sidebarMiniWidth = '50px';
// Boxed layout maximum width
export var boxedLayoutMaxWidth = '1024px';
// When the logo should go to the top of the screen
export var screenHeaderCollapse = screenXsMax;

// Link colors (Aka = <a> tags)
export var linkColor = lightBlue;
export var linkHoverColor = tinycolor(linkColor).lighten(15).toString();

// SIDEBAR SKINS
// --------------------------------------------------------

// Dark sidebar
export var sidebarDarkBg = '#222d32';
export var sidebarDarkHoverBg = tinycolor(sidebarDarkBg).darken(2).toString();
export var sidebarDarkColor = tinycolor(sidebarDarkBg).lighten(60).toString();
export var sidebarDarkHoverColor = '#fff';
export var sidebarDarkSubmenuBg = tinycolor(sidebarDarkBg).lighten(5).toString();
export var sidebarDarkSubmenuColor = tinycolor(sidebarDarkSubmenuBg).lighten(40).toString();
export var sidebarDarkSubmenuHoverColor = '#fff';

// Light sidebar
export var sidebarLightBg = '#f9fafc';
export var sidebarLightHoverBg = tinycolor('#f0f0f1').lighten(1.5).toString();
export var sidebarLightColor = '#444';
export var sidebarLightHoverColor = '#000';
export var sidebarLightSubmenuBg = sidebarLightHoverBg;
export var sidebarLightSubmenuColor = '#777';
export var sidebarLightSubmenuHoverColor = '#000';

// CONTROL SIDEBAR
//--------------------------------------------------------
export var controlSidebarWidth = sidebarWidth;

// BOXES
//--------------------------------------------------------
export var boxBorderColor = '#f4f4f4';
export var boxBorderRadius = '3px';
export var boxFooterBg = '#fff';
export var boxBoxshadow = '0 1px 1px rgba(0, 0, 0, .1)';
export var boxPadding = '10px';

// Box variants
export var boxDefaultBorderTopColor = '#d2d6de';

// BUTTONS
//--------------------------------------------------------
export var btnBoxshadow = 'none';

// PROGRESS BARS
//--------------------------------------------------------
export var progressBarBorderRadius = '1px';
export var progressBarSmBorderRadius = '1px';
export var progressBarXsBorderRadius = '1px';

// FORMS
//--------------------------------------------------------
export var inputRadius = '0';

// BUTTONS
//--------------------------------------------------------

// Border radius for non flat buttons
export var btnBorderRadius = '3px';

// DIRECT CHAT
//--------------------------------------------------------
export var directChatHeight = '250px';
export var directChatDefaultMsgBg = gray;
export var directChatDefaultFontColor = '#444';
export var directChatDefaultMsgBorderColor = gray;

// CHAT WIDGET
//--------------------------------------------------------
export var attachmentBorderRadius = '3px';

// TRANSITIONS SETTINGS
//--------------------------------------------------------

// Transition global options
export var transitionSpeed = '.3s';
export var transitionFn = 'ease-in-out';

// MIXINS
//--------------------------------------------------------
export var navbarVariant = function navbarVariant(color) {
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

export var logoVariant = function logoVariant(bgColor) {
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#fff';
  var borderBottomColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'transparent';
  var borderBottomWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '0';
  return {
    logoBgColor: bgColor,
    logoColor: color,
    logoBorderBottom: borderBottomWidth + ' solid ' + borderBottomColor,
    logoHover: tinycolor(bgColor).darken(1).toString()
  };
};

export var sidebarVariant = function sidebarVariant(color) {
  var light = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return !light ? {
    sidebarBg: sidebarDarkBg,
    userPanelColor: '#fff',
    sidebarHeaderColor: tinycolor(sidebarDarkBg).lighten(20).toString(),
    sidebarHeaderBg: tinycolor(sidebarDarkBg).darken(4).toString(),
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
    sidebarFormBorder: '1px solid ' + tinycolor(sidebarDarkBg).lighten(10).toString(),
    sidebarFormMargin: '10px 10px',
    sidebarFormInputBoxShadow: 'none',
    sidebarFormInputBg: tinycolor(sidebarDarkBg).lighten(10).toString(),
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
    sidebarHeaderColor: tinycolor(sidebarLightColor).lighten(25).toString(),
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

export var navbarItemVariant = function navbarItemVariant(color) {
  var dividerColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgba(255, 255, 255, 0.1)';
  var itemLinkColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#fff';
  return {
    navbarItemDividerBg: dividerColor,
    navbarItemLinkColor: itemLinkColor,
    navbarItemLinkHoverBg: tinycolor(color).darken(5).toString()
  };
};