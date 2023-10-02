import React from 'react';
import './side-nav.css'
import { HomeIcon, UserIcon } from '@heroicons/react/24/solid';
import {
  MagnifyingGlassIcon,
  BellIcon,
  BookmarkIcon
} from '@heroicons/react/24/solid';

import {
  IconMessage,
  IconUsersGroup
} from '@tabler/icons-react';

const SideNav: React.FC = () => {
  return (
    <div className='side-nav'>
      <div className="side-nav-links">
        <a href='#'><HomeIcon className='side-nav-icon' /> HOME </a>
        <a href='#'><MagnifyingGlassIcon className='side-nav-icon' /> Discover</a>
        <a href='#'><BellIcon className='side-nav-icon' /> Notification</a>
        <a href='#'><IconMessage className='side-nav-icon' /> Messages </a>
        <a href='#'><IconUsersGroup className='side-nav-icon' /> Friends </a>
        <a href='#'><BookmarkIcon className='side-nav-icon' /> Bookmarks </a>
        <a href='#'><UserIcon className='side-nav-icon' /> Profile </a>
      </div>
    </div>
  );
};

export default SideNav;
