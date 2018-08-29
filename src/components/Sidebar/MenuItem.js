/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tinycolor from 'tinycolor2';

import {
  fontFamilyBase,
  fontSizeBase,
  lineHeightBase,
  fontWeightBase,
  sidebarWidth,
  sidebarMiniWidth,
  screenSmMin,
  lightBlue,
  green,
  yellow,
  red,
  aqua,
} from '../../styles/variables';

const Label = styled.div`
  /* shared */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: ${fontFamilyBase};
  box-sizing: border-box;

  cursor: pointer;
  user-select: none;

  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  display: inline;
  padding: .2em .6em .3em .6em;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;
  color: #fff;
  margin-right: 5px;

  /* ----- color ----- */
  background-color: ${(props) => {
    switch (props.type) {
      case 'primary':
        return lightBlue;
      case 'success':
        return green;
      case 'danger':
        return red;
      case 'warning':
        return yellow;
      case 'information':
        return aqua;
      default:
        return lightBlue;
    }
  }};

  /* ----- collapse ----- */
  ${props => props.collapse && `
    display: ${props.hover ? 'block' : 'none'};
    float: right;
  `}
`;

const RightSpan = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -7px;

  color: ${props => props.theme.sidebarLinkColor || '#fff'};

  /* ----- hover ----- */
  ${props => (props.collapse && props.hover && !props.level) && `
    display: block;
    left: ${parseInt(sidebarWidth, 10) - 30}px;
    top: 10px!important;
    margin-left: -3px;
    padding: 12px 5px 12px 20px;
    float: right;
    overflow-x: visible;
  `}
`;

const StyledTitle = styled.span`
  cursor: pointer;
  user-select: none;

  /* collapse */
  ${props => (!props.level && props.collapse) &&
    `@media (min-width: ${screenSmMin}) {
      border-top-right-radius: 4px;
      ${(props.hover ?
        `
          display: block !important;
          position: absolute;
          width: ${parseInt(sidebarWidth, 10) - parseInt(sidebarMiniWidth, 10)}px;
          left: ${sidebarMiniWidth};
          top: 0;
          margin-left: -3px;
          padding: 12px 5px 12px 20px;
          background-color: inherit;
        ` :
        `
          display: none !important;
          transform: translateZ(0);
        `
      )}
    }`
  }
`;

const StyledRightIcon = styled.i`
  width: auto;
  height: auto;
  padding: 0;
  margin-right: 10px;
  margin-left: .3em;
  float: right;

  ${props => props.open && `
    transform: rotate(-90deg);
  `}

  /* ----- collapse ----- */
  ${props => (props.collapse && !props.hover) && 'display: none !important;'};
`;

const StyledLeftIcon = styled.i`
  width: 20px;

  /* ----- color ----- */
  ${(props) => {
    switch (props.color) {
      case 'primary':
        return `color: ${lightBlue};`;
      case 'success':
        return `color: ${green};`;
      case 'danger':
        return `color: ${red};`;
      case 'warning':
        return `color: ${yellow};`;
      case 'information':
        return `color: ${aqua};`;
      default: {
        const c = tinycolor(props.color);
        return c.isValid() ?
          `color: ${c.toString()};` :
          null;
      }
    }
  }};
`;

const StyledLink = styled.a`
  cursor: auto;
  text-decoration: none !important;
  display: block;
  padding: ${props => (!props.level ? '12px 5px 12px 15px' : '5px 5px 5px 15px')};
  position: relative;
  margin: 0;
  font-size: ${fontSizeBase};
  background-color: transparent;

  &:active,
  &:focus,
  &:hover {
    outline: none !important;
    text-decoration: none !important;
  }

  /* ----- theme ----- */
  /* text color - different in submenu */
  color: ${props =>
    (props.level ? props.theme.sidebarSubmenuLinkColor : props.theme.sidebarLinkColor)} !important;
  /* left border - none in submenu */
  border-left: ${props => (!props.level ? props.theme.sidebarLinkBorderLeft : 'none')};
  /* transition */
  ${props => (props.theme.sidebarLinkTransition && `
    transition: ${props.theme.sidebarLinkTransition};
  `)}
  /* font weight */
  ${props => (props.theme.sidebarLinkFontWeight && `
    font-weight: ${props.theme.sidebarLinkFontWeight};
  `)}

  /* ----- active or hover properties ----- */
  ${props => (props.active || props.hover) && `
    color: ${props.theme.sidebarLinkActiveColor || '#fff'} !important;
    background: ${!props.level && props.theme.sidebarLinkActiveBg};
    border-left-color: ${props.theme.sidebarLinkActiveBorderLeftColor || '#3c8dbc'};
    font-weight: ${props.theme.sidebarLinkActiveFontWeight || 'normal'};
    text-decoration: none !important;
  `}
`;

const StyledSubMenu = styled.ul`
  display: ${props => (props.open ? 'block' : 'none')};
  list-style: none;
  padding: 0 0 0 ${props => ((props.level + 1) * 5)}px;

  /* ----- theme ----- */
  margin: ${props => props.theme.sidebarSubmenuMargin || '0'};
  background-color: ${props => props.theme.sidebarSubmenuBg || '#222d32'};

  /* ----- collapse ----- */
  ${props => props.collapse &&
    `@media (min-width: ${screenSmMin}) {
      ${props.theme.sidebarSubmenuLgBorderLeft &&
        `border-left: ${props.theme.sidebarSubmenuLgBorderLeft};`}
    }`
  }
  ${props => (props.collapse && props.open && !props.level) &&
    `@media (min-width: ${screenSmMin}) {
      position: absolute;
      width: ${parseInt(sidebarWidth, 10) - 50}px;
      left: ${sidebarMiniWidth};
      top: 44px;
      margin-left: 0;
      border-bottom-right-radius: 4px;
      ${(props.theme.sidebarSubmenuLgBorderLeft) &&
        `border-left: ${props.theme.sidebarSubmenuLgBorderLeft};`}
    }`
  }
`;

const StyledMenuItem = styled.li`
  /* shared */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: ${fontFamilyBase};
  font-weight: ${fontWeightBase};
  font-size: ${fontSizeBase};
  line-height: ${lineHeightBase};
  box-sizing: border-box;

  list-style: none;
  position: relative;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  display: list-item;
  text-align: match-parent;
`;

const renderChildren = (children, sidebarCollapse, level, hover) => {
  const newLevel = level + 1;
  return React.Children.map(children, (child, index) => (
    React.cloneElement(child, {
      key: index.toString(),
      collapse: sidebarCollapse,
      level: newLevel,
      parentHover: hover,
    })
  ));
};

const renderLabels = (labels, collapse, hover) => (
  labels.map((l) => {
    if (l.key && l.type && l.text) {
      if (l.key === 1) {
        return (<Label
          collapse={collapse}
          hover={hover}
          key={l.key.toString()}
          type={l.type}
        >
          {l.text}
        </Label>);
      } else if (!collapse) {
        return (<Label
          collapse={collapse}
          hover={hover}
          key={l.key.toString()}
          type={l.type}
        >
          {l.text}
        </Label>);
      }
    }
    return null;
  })
);

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open || false,
      hover: false,
    };
    this._toggleMenu = this.toggleMenu.bind(this);
    this._toggleHover = this.toggleHover.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    (nextProps.collapse !== this.props.collapse) &&
      this.setState({ open: nextProps.open || false });
  }

  toggleMenu() {
    this.props.children && this.setState({ open: !this.state.open });
  }

  toggleHover(state) { this.setState({ hover: state }); }

  getCollapseIcon() {
    const { collapseIcon } = this.props;
    if (typeof collapseIcon !== 'undefined') {
      if (typeof collapseIcon === 'string') {
        return (<StyledRightIcon
          className={collapseIcon}
          open={this.state.open}
          collapse={this.props.collapse}
          hover={this.state.hover}
        />);
      }

      return collapseIcon;
    }
    return (<StyledRightIcon
      className="fa fa-angle-left"
      open={this.state.open}
      collapse={this.props.collapse}
      hover={this.state.hover}
    />);
  }

  getItemMenuIcon() {
    const { icon } = this.props;
    if ((typeof icon !== 'undefined'
      && typeof icon === 'object'
      && (typeof icon.color !== 'undefined' || typeof icon.className !== 'undefined'))
      || typeof icon === 'undefined') {
      return (
        <StyledLeftIcon
          className={this.props.icon.className}
          color={this.props.icon.color}
        />
      );
    }
    return icon;
  }

  render() {
    const {
      collapse,
      parentHover,
      level,
      active,
      children,
      onClick,
      href,
      title,
      labels,
      iconLeft,
    } = this.props;
    return (
      <StyledMenuItem
        collapse={collapse}
        hover={parentHover}
        level={level}
        onMouseLeave={() => this._toggleHover(false)}
      >
        <StyledLink
          active={active}
          collapse={collapse}
          hover={this.state.hover}
          href={(children || onClick) ?
            null : href}
          level={level}
          onClick={children ?
            this._toggleMenu : onClick}
          onMouseEnter={() => this._toggleHover(true)}
        >
          {!!iconLeft && this.getItemMenuIcon()}
          <StyledTitle
            collapse={collapse}
            hover={this.state.hover}
            level={level}
          >
            {title}
          </StyledTitle>
          {!iconLeft && this.getItemMenuIcon()}
          <RightSpan
            collapse={collapse}
            hover={this.state.hover}
            level={level}
          >
            {(labels ?
              renderLabels(
                labels,
                collapse,
                this.state.hover,
              ) :
              children && this.getCollapseIcon()
            )}
          </RightSpan>
        </StyledLink>
        {children && (
          <StyledSubMenu
            collapse={collapse}
            hover={this.state.hover}
            level={level}
            open={this.state.open}
          >
            {renderChildren(
              children,
              collapse,
              level,
              (this.state.hover || parentHover),
            )}
          </StyledSubMenu>
        )}
      </StyledMenuItem>
    );
  }
}

MenuItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  collapse: PropTypes.bool,
  icon: PropTypes.oneOfType([
    PropTypes.shape({
      className: PropTypes.string,
      color: PropTypes.string,
    }),
    PropTypes.element,
  ]),
  collapseIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  href: PropTypes.string,
  labels: PropTypes.arrayOf(PropTypes.object),
  level: PropTypes.number,
  onClick: PropTypes.func,
  parentHover: PropTypes.bool,
  iconLeft: PropTypes.bool,
  title: PropTypes.string,
  open: PropTypes.bool
};

MenuItem.defaultProps = {
  collapse: false,
  icon: { className: ' fa fa-circle-o', color: 'none' },
  href: null,
  level: 0,
  parentHover: false,
  title: 'Title',
  iconLeft: true,
};

export default MenuItem;
