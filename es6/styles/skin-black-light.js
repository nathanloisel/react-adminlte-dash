import tinycolor from 'tinycolor2';

import { navbarVariant, logoVariant, sidebarVariant, baseColor, white } from './variables';

export default Object.assign({}, {
  headerBoxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
  navbarToggleColor: baseColor,
  navbarBrandColor: baseColor,
  navbarItemBorder: '1px solid #eee',
  navbarUserMenuHeaderBg: '#222',
  logoSmallVariant: '\n      background-color: #222;\n      color: ' + white + ';\n      border-bottom: 0 solid transparent;\n\n      &:hover {\n        background-color: ' + tinycolor('#222').darken(1).toString() + ';\n      }\n      '
}, navbarVariant(white, baseColor, '#999', white), logoVariant(white, baseColor), sidebarVariant(white, true));