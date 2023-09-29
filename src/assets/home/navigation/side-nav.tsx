import React from 'react';
import { HomeIcon } from '@heroicons/react/24/solid';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import BookmarkIcon from '@heroicons/react/24/solid/BookmarkIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';


const SideNav: React.FC = () => {
  const navItems = [
    {
      name: 'Home',
      path: '/home',
      icon: <HomeIcon className="w-6 h-6" />, // Use the imported Home icon component
    },
    {
      name: 'Explore',
      path: '/explore',
      icon: <MagnifyingGlassIcon className="w-6 h-6" />, // Use the imported Search icon component
    },
    {
      name: 'Saved',
      path: '/saved',
      icon: <BookmarkIcon className="w-6 h-6" />, // Use the imported Bookmark icon component
    },
    {
      name: 'Profile',
      path: '/profile',
      icon: <UserIcon className="w-6 h-6" />, // Use the imported User icon component
    },
  ];

  return (
    <div className="side-nav">
      <div className="side-nav-items">
        {navItems.map((item, index) => (
          <div key={index} className="side-nav-item">
            <span className="icon">{item.icon}</span>
            <span className="label">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
