import React, { useEffect, useState } from 'react';
import './side-nav.css'
import { HomeIcon } from '@heroicons/react/24/solid';
import {
  BookmarkIcon
} from '@heroicons/react/24/solid';
import { IconBook } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { IconUser } from '@tabler/icons-react';
import { loginApi } from '../../../config/axios';
import User from '../../../model/user';

const SideNav: React.FC = () => {

  const [loginUser, setLoginUser] = useState<User>();
  const fetchLoginData = async () => {
    const response = await loginApi.get('/currentUser', { withCredentials: true });
    setLoginUser(response.data);
  };
  useEffect(() => {
    fetchLoginData();
  }, [loginApi]);

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
        <Link to='/subject-page'><IconBook className='side-nav-icon' />Subjects</Link>
        <Link to='about-us'>
          <svg height="22px" width="22px" viewBox="0 0 202.592 202.592" fill="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M198.048,160.105l-31.286-31.29c-6.231-6.206-16.552-6.016-23.001,0.433l-15.761,15.761 c-0.995-0.551-2.026-1.124-3.11-1.732c-9.953-5.515-23.577-13.074-37.914-27.421C72.599,101.48,65.03,87.834,59.5,77.874 c-0.587-1.056-1.145-2.072-1.696-3.038l10.579-10.565l5.2-5.207c6.46-6.46,6.639-16.778,0.419-23.001L42.715,4.769 c-6.216-6.216-16.541-6.027-23.001,0.433l-8.818,8.868l0.243,0.24c-2.956,3.772-5.429,8.124-7.265,12.816 c-1.696,4.466-2.752,8.729-3.235,12.998c-4.13,34.25,11.52,65.55,53.994,108.028c58.711,58.707,106.027,54.273,108.067,54.055 c4.449-0.53,8.707-1.593,13.038-3.275c4.652-1.818,9.001-4.284,12.769-7.233l0.193,0.168l8.933-8.747 C204.079,176.661,204.265,166.343,198.048,160.105z M190.683,176.164l-3.937,3.93l-1.568,1.507 c-2.469,2.387-6.743,5.74-12.984,8.181c-3.543,1.364-7.036,2.24-10.59,2.663c-0.447,0.043-44.95,3.84-100.029-51.235 C14.743,94.38,7.238,67.395,10.384,41.259c0.394-3.464,1.263-6.95,2.652-10.593c2.462-6.277,5.812-10.547,8.181-13.02l5.443-5.497 c2.623-2.63,6.714-2.831,9.112-0.433l31.286,31.286c2.394,2.401,2.205,6.492-0.422,9.13L45.507,73.24l1.95,3.282 c1.084,1.829,2.23,3.879,3.454,6.106c5.812,10.482,13.764,24.83,29.121,40.173c15.317,15.325,29.644,23.27,40.094,29.067 c2.258,1.249,4.32,2.398,6.17,3.5l3.289,1.95l21.115-21.122c2.634-2.623,6.739-2.817,9.137-0.426l31.272,31.279 C193.5,169.446,193.31,173.537,190.683,176.164z"></path> </g> </g> </g></svg>
          Contact
        </Link>
        {loginUser?.role === 'ROLE_ADMIN' && (
          <Link to='user-list-page'><IconUser className='side-nav-icon' />Users</Link>
        )}
      </div>
    </div>
  );
};

export default SideNav;
