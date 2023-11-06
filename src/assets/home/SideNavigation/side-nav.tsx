import React from 'react';
import './side-nav.css'
import { HomeIcon } from '@heroicons/react/24/solid';
import {
  BookmarkIcon
} from '@heroicons/react/24/solid';
import { IconBook } from '@tabler/icons-react';

import { Link } from 'react-router-dom';

const SideNav: React.FC = () => {

  return (
    <div className='side-nav'>
      <div className="side-nav-links">

        <Link to='/'><HomeIcon className='side-nav-icon' /> HOME</Link>

        <Link to='/bookmark'><BookmarkIcon className='side-nav-icon' />Bookmarks</Link>

        <Link to='/tag-page'>
          <svg viewBox="0 0 44 44" width="24" height="24">
            <g className="icon-container">
              <path fill="white" d="M36.017 24.181L21.345 9.746C20.687 9.087 19.823 9 18.96 9H8.883C7.029 9 6 10.029 6 11.883v10.082c0 .861.089 1.723.746 2.38L21.3 39.017a3.287 3.287 0 004.688 0l10.059-10.088c1.31-1.312 1.28-3.438-.03-4.748zm-23.596-8.76a1.497 1.497 0 11-2.118-2.117 1.497 1.497 0 012.118 2.117z"></path>
              <path fill="white" d="M12.507 14.501a1 1 0 11-1.415-1.414l8.485-8.485a1 1 0 111.415 1.414l-8.485 8.485z"></path>
            </g>
          </svg> Tags
        </Link>

        <Link to='/category-page'>
          <svg width="24" height="24" fill='white'>
            <g className="icon-container">
              <path d="M3 6C3 4.34315 4.34315 3 6 3H7C8.65685 3 10 4.34315 10 6V7C10 8.65685 8.65685 10 7 10H6C4.34315 10 3 8.65685 3 7V6Z" stroke="#000000" stroke-width="2" />
              <path d="M14 6C14 4.34315 15.3431 3 17 3H18C19.6569 3 21 4.34315 21 6V7C21 8.65685 19.6569 10 18 10H17C15.3431 10 14 8.65685 14 7V6Z" stroke="#000000" stroke-width="2" />
              <path d="M14 17C14 15.3431 15.3431 14 17 14H18C19.6569 14 21 15.3431 21 17V18C21 19.6569 19.6569 21 18 21H17C15.3431 21 14 19.6569 14 18V17Z" stroke="#000000" stroke-width="2" />
              <path d="M3 17C3 15.3431 4.34315 14 6 14H7C8.65685 14 10 15.3431 10 17V18C10 19.6569 8.65685 21 7 21H6C4.34315 21 3 19.6569 3 18V17Z" stroke="#000000" stroke-width="2" />
            </g>
          </svg> Categories
        </Link>

        <Link to='/subject-page'><IconBook className='side-nav-icon' />Subjects</Link>
      </div>
    </div>
  );
};

export default SideNav;
