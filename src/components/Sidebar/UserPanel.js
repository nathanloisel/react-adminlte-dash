/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  fontFamilyBase,
  fontSizeBase,
  fontWeightBase,
} from '../../styles/variables';

const StyledIcon = styled.i`
  margin-right: 3px;
  color: ${props => (props.online ? '#3c763d' : '#a94442')};
`;

const StyledP = styled.p`
  margin: 0 0 9px 0;
  font-weight: 600;
`;

const StyledLink = styled.a`
  text-decoration: none !important;
  padding-right: 5px;
  margin-top: 3px;
  font-size: 11px;
  background-color: transparent;
  color: ${({ theme }) => theme.userPanelColor || '#fff'} !important;

  cursor: pointer;
  user-select: none;
`;

const StyledInfo = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  color: ${({ theme }) => theme.userPanelColor || '#fff'};
  display: ${({ collapse }) => (collapse ? 'none !important' : 'block')};
  float: left !important;
  padding: 5px 5px 5px 15px;
  line-height: 1;
  position: absolute;
  left: 55px;

  /* collapse transform */
  ${({ collapse }) => collapse && 'transform: translateZ(0);'}
`;

const StyledImage = styled.img`
  box-sizing: border-box;
  display: block;
  float: left!important;
  width: 100%;
  max-width: 45px;
  height: auto;
  border-radius: 50%;
  border: 0;

  cursor: pointer;
  user-select: none;
`;

const StyledPanel = styled.div`
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: ${fontFamilyBase};
  font-weight: ${fontWeightBase};
  font-size: ${fontSizeBase};
  box-sizing: border-box;

  position: relative;
  width: 100%;
  padding: 10px;
  overflow: hidden;
  display: block;
  white-space: nowrap;
`;

function getAuthStatusIcon(online, authStatusIcon) {
  if (typeof authStatusIcon !== 'undefined') {
    if (typeof authStatusIcon === 'object'
    && typeof authStatusIcon.online !== 'undefined'
    && typeof authStatusIcon.offline !== 'undefined') {
      if (online) {
        return authStatusIcon.online;
      }
      return authStatusIcon.offline;
    } else if (typeof authStatusIcon === 'string') {
      return <StyledIcon className={authStatusIcon} online={online} />;
    }
    console.warn( // eslint-disable-line no-console
      'if authStatusIcon is an object, it must have an online and a'
      + ' offline property otherwise, use a string that represente the class name.',
    );
    return null;
  }
  return <StyledIcon className="fa fa-circle" online={online} />;
}

const UserPanel = ({ name, image, href = null, online, collapse, authStatusIcon }) => (
  <StyledPanel collapse={collapse} >
    <StyledImage src={image} />
    <StyledInfo collapse={collapse} >
      <StyledP>{name}</StyledP>
      <StyledLink href={href}>
        {getAuthStatusIcon(online, authStatusIcon)}
        {online ? ' Online' : ' Offline'}
      </StyledLink>
    </StyledInfo>
  </StyledPanel>
);

UserPanel.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  href: PropTypes.string,
  online: PropTypes.bool,
  collapse: PropTypes.bool,
  authStatusIcon: PropTypes.shape({
    online: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    offline: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  }),
};

export default UserPanel;
