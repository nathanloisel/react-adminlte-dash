
  import * as React from 'react';

  export interface MenuItemProps {
    children?: React.ReactNode;
    active?: boolean;
    collapse?: boolean;
    icon?: { className: string; color: string } | JSX.Element;
    collapseIcon?: JSX.Element | string;
    href?: string;
    labels?: object[];
    level?: number;
    onClick?: (event: React.UIEvent<HTMLLinkElement>) => void;
    parentHover?: boolean;
    iconRight?: boolean;
    title?: string;
    open?: boolean;
  }
  declare class MenuItem extends React.Component<MenuItemProps> {}

  export interface UserPanelProps {
    name?: string;
    image?: string;
    href?: string;
    online?: boolean;
    collapse?: boolean;
  }
  declare class UserPanel extends React.Component<UserPanelProps> {}

  export interface SearchProps {
    name?: string;
    placeholder?: string;
    onClick?: (event: React.UIEvent<HTMLButtonElement>) => void;
    collapse?: boolean;
  }
  declare class Search extends React.Component<SearchProps> {}

  export interface MenuProps {
    header: string;
  }
  declare class Menu extends React.Component<MenuProps> {
    public static Item: typeof MenuItem;
  }

  export interface SidebarProps {
    children: React.ReactNode;
    fixed: boolean;
    sidebarMini: boolean;
    sidebarCollapse: boolean;
  }

  interface SidebarClass extends React.Component<SidebarProps> {}

  declare class Sidebar extends React.Component<SidebarProps> {
    public static Menu: typeof Menu;
    Search: Search;
    UserPanel: UserPanel;
  }
  export default Sidebar;