// Type definitions for react-adminlte-dash 0.4
// Project: https://zksailor534.github.io/react-adminlte-dash/
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */

declare module 'react-adminlte-dash' {
  import * as React from 'react';
  export {
    default as Dashboard,
    DashboardProps
  } from 'react-adminlte-dash/src/components/Dashboard';
  export { default as Footer, FooterProps } from 'react-adminlte-dash/src/components/Footer';
  export { default as Header, HeaderProps } from 'react-adminlte-dash/src/components/Header';
  export { default as Sidebar, SidebarProps } from 'react-adminlte-dash/src/components/Sidebar';
}
