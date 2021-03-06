import styled from 'styled-components';

import {
  fontFamilyBase,
  fontSizeBase,
  lineHeightBase,
  fontWeightBase,
  screenXsMax,
  screenSmMin,
  navbarHeight,
  sidebarWidth,
  sidebarMiniWidth,
  transitionSpeed,
  transitionFn,
} from '../styles/variables';

const Content = styled.div`
  /* clearfix */
  &:before, &:after {
    display: table;
    content: " ";
    box-sizing: border-box;
  }
  &:after {
    clear: both;
  }

  /* shared */
  bottom: 0;
  top: 0;
  position: absolute;
  left: 0;
  right: 0;
  margin-top: ${navbarHeight};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: ${fontFamilyBase};
  font-weight: ${fontWeightBase};
  font-size: ${fontSizeBase};
  line-height: ${lineHeightBase};
  box-sizing: border-box;

  /* theme */
  ${props => (props.theme.contentLeftBorder && `border-left: ${props.theme.contentLeftBorder};`)}
  background-color: transparent;

  min-height: 100%;
  margin-left: ${props => (props.topNav ? '0' : sidebarWidth)};
  z-index: 800;

  transition: ${transitionSpeed} ${transitionFn}, width ${transitionSpeed} ${transitionFn};

  /* fixed layout */
  ${props => (props.fixed && `padding-top: ${navbarHeight};`)};

  /* media queries */
  /* sidebar on large screens */
  @media (min-width: ${screenSmMin}) {
    ${props => ((props.sidebarCollapse && props.sidebarMini) && `
      margin-left: ${sidebarMiniWidth} !important;
      z-index: 840;
    `)}
    ${props => ((props.sidebarCollapse && !props.sidebarMini) && 'margin-left: 0;')}
  }
  /* sidebar on small screens */
  @media (max-width: ${screenXsMax}) {
    margin-left: 0;
    ${props => (props.fixed && `padding-top: ${parseInt(navbarHeight, 10) * 2}px;`)};
  }
`;

export default Content;
