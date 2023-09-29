import React from 'react';
import Layout from './navigation/layout.tsx';
import BlogTable from './blog-table';
import { HomeIcon } from '@heroicons/react/24/solid';
import './home-page.css'; // Import your CSS file for styling

const HomePage: React.FC = () => {
  return (
    <>
      <nav>
        <div className="nav-left">
          <img
            src='src/assets/images/fperspective-logo.png'
            className='logo'
          />
          <ul>
            <li><img src='src/assets/images/notification.png' /></li>
            <li><img src='src/assets/images/inbox.png' /></li>
            <li><img src='src/assets/images/video.png' /></li>
          </ul>
        </div>
        <div className="nav-right">

          <div className='search-box'>
            <img src='src/assets/images/search.png' />
            <input type='text' placeholder='Search' />
          </div>

          <div className='nav-user-icon online'>
            <img src='src/assets/images/profile-pic.png' />
          </div>

        </div>
      </nav>

      <div className="container">
        {/* Left nav bar */}
        <div className='left-sidebar'>
          <div className="imp-links">
            <a href='#'><HomeIcon className='icon' /> HOME </a>
            <a href='#'><img src='src/assets/images/news.png' /> Latest News </a>
            <a href='#'><img src='src/assets/images/friends.png' /> Friends </a>
            <a href='#'><img src='src/assets/images/group.png' /> Group </a>
            <a href='#'><img src='src/assets/images/marketplace.png' /> Market </a>
            <a href='#'><img src='src/assets/images/watch.png' /> Watch </a>
            <a href='#'> See More </a>
          </div>
          <div className="shortcut-links">
            <p>Your Shortcuts</p>
          </div>
        </div>
        {/* Main content */}
        <div className='main-sidebar'>

        </div>

        {/* Right nav bar */}
        <div className='right-sidebar'>

        </div>

      </div>
    </>
  );
};

export default HomePage;
