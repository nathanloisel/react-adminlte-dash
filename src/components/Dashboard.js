/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';
import themes from '../styles';

import {
  boxedLayoutMaxWidth,
} from '../styles/variables';

const StyledDashboard = styled.div`
  /* clearfix */
  &:before, &:after {
    display: table;
    content: " ";
    box-sizing: border-box;
  }
  &:after {
    clear: both;
  }

  /* theme */
  ${({ theme }) => (theme.sidebarBg && `background-color: ${theme.sidebarBg};`)}

  min-height: 100vh;
  position: relative;
  overflow: hidden;

  ${({ boxed }) => (boxed && `
    max-width: ${boxedLayoutMaxWidth};
    margin: 0 auto;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    position: relative;
  `)}
`;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this._sidebarToggle = this.sidebarToggle.bind(this);

    this.state = {
      sidebarCollapse: this.props.initialCollapse,
    };
  }

  sidebarToggle() { this.setState({ sidebarCollapse: !this.state.sidebarCollapse }); }

  render() {
    const theme = themes[this.props.theme];

    const {
      logoOnClick,
      logoHref,
      logoLg,
      logoSm,
      fixed,
      sidebarMini,
      sidebarToggleIcon,
      navbarChildren,
      sidebarChildren,
      children,
      footerChildren,
      } = this.props;
    return (
      <StyledDashboard>
        <ThemeProvider theme={theme}>
          <Header
            logoOnClick={logoOnClick}
            logoHref={logoHref}
            logoLg={logoLg}
            logoSm={logoSm}
            fixed={fixed}
            sidebarToggle={this._sidebarToggle}
            sidebarCollapse={this.state.sidebarCollapse}
            sidebarMini={sidebarMini}
            sidebarToggleIcon={sidebarToggleIcon}
          >
            {navbarChildren}
          </Header>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Sidebar
            fixed={fixed}
            sidebarCollapse={this.state.sidebarCollapse}
            sidebarMini={sidebarMini}
          >
            {sidebarChildren}
          </Sidebar>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Content
            fixed={fixed}
            name="content-wrapper"
            sidebarCollapse={this.state.sidebarCollapse}
            sidebarMini={sidebarMini}
          >
            {children}
          </Content>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          {footerChildren && <Footer
            sidebarCollapse={this.state.sidebarCollapse}
            sidebarMini={sidebarMini}
          >
            {footerChildren}
          </Footer>}
        </ThemeProvider>
      </StyledDashboard>
    );
  }
}

Dashboard.propTypes = {
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
  sidebarToggleIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  theme: PropTypes.string,
};

Dashboard.defaultProps = {
  fixed: false,
  initialCollapse: false,
  sidebarMini: false,
  theme: 'skin-blue',
};

export default Dashboard;
