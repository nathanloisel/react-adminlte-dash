
  import * as React from 'react';

  export interface FooterProps {
    sidebarCollapse: boolean;
    topNav: boolean;
    sidebarMini: boolean;
  }

  declare class Footer extends React.Component<FooterProps> {}

  export default Footer;