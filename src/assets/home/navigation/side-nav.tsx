import React from 'react';
import SideNavItem from './side-nav-items';
import items from './config';

interface SideNavProps {
  open: boolean;
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ open, onClose }) => {
  const pathname = window.location.pathname; // Get the current pathname

  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'common.white',
        width: open ? '280px' : '0',
        position: 'fixed',
        top: '0',
        left: '0',
        height: '100%',
        overflowX: 'hidden',
        transition: '0.5s',
        zIndex: 1040, // Adjust the z-index as needed
      }}
    >
      <div style={{ padding: '20px' }}>
        {/* Your logo or branding here */}
      </div>
      <div style={{ borderTop: '1px solid #333' }}></div>
      <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
        {items.map((item, index) => {
          const active = item.path ? pathname === item.path : false;

          return (
            <SideNavItem
              active={active}
              icon={item.icon}
              key={item.title}
              path={item.path}
              title={item.title}
            />
          );
        })}
      </ul>
      <div style={{ borderTop: '1px solid neutral.700' }}></div>
    </div>
  );
};

export default SideNav;
