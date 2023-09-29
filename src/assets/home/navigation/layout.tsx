import React, { ReactNode } from 'react';
import TopNav from './top-nav'; // Import TopNav component
import SideNav from './side-nav';
import Trending from './trending'; // Import Trending component

interface LayoutProps {
  children: ReactNode; // Include the children prop
}

const Layout: React.FC<LayoutProps> = () => {

  return (

    <>
      <TopNav />
      <SideNav/>

      <div
        className="LayoutRoot"
        style={{
          display: 'flex',
          flex: '1 1 auto',
          maxWidth: '100%',
          paddingLeft: 280
        }}
      >
        <div
          className="LayoutContainer"
          style={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          {children}
          <Trending />
        </div>
      </div>

    </>
  );
};

export default Layout;
