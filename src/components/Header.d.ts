declare module 'react-adminlte-dash/src/components/Header' {
  import * as React from 'react';

  export interface HeaderUserMenuProps {
    name?: string;
    image?: string;
    className?: string;
    profileAction?: (event: React.UIEvent<HTMLButtonElement>) => void;
    signOutAction?: (event: React.UIEvent<HTMLButtonElement>) => void;
    headerImageRenderer?: () => void;
    userImageRenderer?: (key: string) => void;
  }
  class HeaderUserMenu extends React.Component<HeaderUserMenuProps> {}

  export interface HeaderItemProps {
    title?: string;
    onClick?: () => void;
    href?: string;
    image?: string;
    iconClass?: string;
  }
  class HeaderItem extends React.Component<HeaderItemProps> {}

  export interface HeaderProps {
    children?: React.ReactNode;
    fixed?: boolean;
    logoOnClick?: (event: React.UIEvent<HTMLLinkElement>) => void;
    logoHref?: string;
    logoLg?: JSX.Element;
    logoSm?: JSX.Element;
    sidebarMini?: boolean;
    sidebarCollapse?: boolean;
    sidebarToggle: (event: React.UIEvent<HTMLButtonElement>) => void;
  }
  class Header extends React.Component<HeaderProps> {
    public static Item: typeof HeaderItem;
    public static UserMenu: typeof HeaderUserMenu;
  }

  export default Header;
}
