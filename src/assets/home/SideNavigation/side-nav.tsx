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
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const SideNav: React.FC = () => {

  return (
    <div className='side-nav'>
      <div className="side-nav-links">
        <a href='#'><HomeIcon className='side-nav-icon' /> HOME </a>
        <a href='#'><MagnifyingGlassIcon className='side-nav-icon' /> Popular</a> 
        <a href='#'><BellIcon className='side-nav-icon' /> Notification</a>
        <a href='#'><IconMessage className='side-nav-icon' /> Messages </a>
        <a href='#'><BookmarkIcon className='side-nav-icon' /> Bookmarks </a>
        <a href='#'><UserIcon className='side-nav-icon' /> Profile </a>
      </div>
    </div>
  );
};

export default SideNav;
