import React, { ReactNode } from 'react';
import TopNav from './top-nav'; // Import TopNav component
import SideNav from './side-nav';
import Trending from './trending'; // Import Trending component

interface LayoutProps {
  children: ReactNode; // Include the children prop
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <TopNav />
      <div className="side-nav-container">
        <SideNav />
      </div>
      <div className="content-container">
        {children}
        <Trending />
      </div>
    </div>
  );
};

export default Layout;
