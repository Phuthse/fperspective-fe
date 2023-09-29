import React from 'react';

interface SideNavItemProps {
  active?: boolean;
  disabled?: boolean;
  external?: boolean;
  icon?: React.ReactNode;
  path?: string;
  title: string;
}

const SideNavItem: React.FC<SideNavItemProps> = ({
  active = false,
  disabled,
  external,
  icon,
  path,
  title,
}) => {
  const linkProps = path
    ? external
      ? {
          href: path,
          target: '_blank',
          rel: 'noopener noreferrer',
        }
      : {
          href: path,
        }
    : {};

  return (
    <li>
      <a
        style={{
          textDecoration: 'none', // Remove underline for links
          width: '100%',
          cursor: 'pointer',
          display: 'flex', // Container for flex layout
          alignItems: 'center',
          paddingLeft: '16px',
          paddingRight: '16px',
          paddingTop: '6px',
          paddingBottom: '6px',
          backgroundColor: active ? 'rgba(255, 255, 255, 0.04)' : 'transparent',
        }}
        {...linkProps}
      >
        {icon && (
          <span
            style={{
              alignItems: 'center',
              color: active ? 'primary.main' : 'neutral.400',
              display: 'inline-flex',
              justifyContent: 'center',
              marginRight: '2px',
              ...(active && {
                color: 'primary.main',
              }),
            }}
          >
            {icon}
          </span>
        )}
        <span
          style={{
            color: disabled ? 'neutral.500' : active ? 'common.white' : 'neutral.400',
            flexGrow: 1,
            fontFamily: 'Your Font Family', // Replace with your font family
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '24px',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </span>
      </a>
    </li>
  );
};

export default SideNavItem;
