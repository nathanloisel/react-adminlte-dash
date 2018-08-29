  import * as React from 'react';

  export type DashboardProps = {
    children?: React.ReactNode;
    logoOnClick?: (event: React.UIEvent<HTMLLinkElement>) => void;
    logoHref?: string;
    logoLg?: JSX.Element;
    logoSm?: JSX.Element;
    navbarChildren?: React.ReactNode | React.ReactNode[];
    sidebarChildren?: React.ReactNode | React.ReactNode[];
    footerChildren?: React.ReactNode | React.ReactNode[];
    fixed?: boolean;
    sidebarMini?: boolean;
    initialCollapse?: boolean;
    theme?: string;
    sidebarToggleIcon: JSX.Element | string;
  };

  class Dashboard extends React.Component<DashboardProps> {
    sidebarToggle(): void;
  }

  export default Dashboard;