import React from 'react';
import './side-nav.css'
import { HomeIcon, UserIcon } from '@heroicons/react/24/solid';
import {
  BookmarkIcon
} from '@heroicons/react/24/solid';

import { Link } from 'react-router-dom';

const SideNav: React.FC = () => {

  return (
    <div className='side-nav'>
      <div className="side-nav-links">

        <a href='#'><HomeIcon className='side-nav-icon' /> HOME </a>

        <Link to='/bookmark'><BookmarkIcon className='side-nav-icon' />Bookmark</Link>

        <Link to='/tag-page'>
          <svg viewBox="0 0 44 44" width="24" height="24">
            <g className="icon-container">
              <path fill="white" d="M36.017 24.181L21.345 9.746C20.687 9.087 19.823 9 18.96 9H8.883C7.029 9 6 10.029 6 11.883v10.082c0 .861.089 1.723.746 2.38L21.3 39.017a3.287 3.287 0 004.688 0l10.059-10.088c1.31-1.312 1.28-3.438-.03-4.748zm-23.596-8.76a1.497 1.497 0 11-2.118-2.117 1.497 1.497 0 012.118 2.117z"></path>
              <path fill="white" d="M12.507 14.501a1 1 0 11-1.415-1.414l8.485-8.485a1 1 0 111.415 1.414l-8.485 8.485z"></path>
            </g>
          </svg> Tags
        </Link>

        <Link to='/user-profile'><UserIcon className='side-nav-icon' /> Profile </Link>

      </div>
    </div>
  );
};

export default SideNav;
