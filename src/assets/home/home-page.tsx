import React from 'react';
import { HomeIcon } from '@heroicons/react/24/solid';
import './home-page.css'; // Import your CSS file for styling
import FollowButton from './follow-button';

const HomePage: React.FC = () => {
  return (
    <>
      <nav className='top-nav'>
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
            <a href='#'><img src='src/assets/images/shortcut-1.png' /> Web Developers </a>
            <a href='#'><img src='src/assets/images/shortcut-2.png' /> Web Design Course </a>
            <a href='#'><img src='src/assets/images/shortcut-3.png' /> Full Stack Development </a>
            <a href='#'><img src='src/assets/images/shortcut-4.png' /> Website Experts </a>
          </div>
        </div>
        {/* Main content */}
        <div className='main-sidebar'>

        </div>

        {/* Right nav bar (treding tags)*/}
        <div className='right-sidebar'>
          <div className='trending-table-container'>
            <table className="trending-table">
              <thead>
                <tr>
                  <th>Trending Tags</th>
                </tr>
              </thead>
              <tbody>

                <a href="#">
                  <tr>
                    <td>
                      <span>#</span>
                      <span> javascript</span>
                    </td>
                    <p> 15.5k posts </p>
                  </tr>
                </a>

                <a href="#">
                  <tr>
                    <td>
                      <span>#</span>
                      <span> C++</span>
                    </td>
                    <p> 17k posts </p>
                  </tr>
                </a>

                <a href="#">
                  <tr>
                    <td>
                      <span>#</span>
                      <span> Python</span>
                    </td>
                    <p> 20k posts </p>
                  </tr>
                </a>

                <a href="#">
                  <tr>
                    <td>
                      <span>#</span>
                      <span> Node.js</span>
                    </td>
                    <p> 9.2k posts </p>
                  </tr>
                </a>

              </tbody>
            </table>
          </div>

          <div className='follow-table-container'>

            <table className="follow-table">
              <thead>
                <tr>
                  <th colSpan={2}>Who to Follow</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='profile-pic'>
                    <img src='src/assets/images/member-1.png' />
                  </td>
                  <td className='profile-name'>
                    <p>Alivia Johnson</p>
                    <p>@alivia</p>
                  </td>
                  <td className='follow-button'>
                    <FollowButton />
                  </td>
                </tr>

                <tr>
                  <td className='profile-pic'>
                    <img src='src/assets/images/member-2.png' />
                  </td>
                  <td className='profile-name'>
                    <p>Mike Tyson</p>
                    <p>@mikee</p>
                  </td>
                  <td className='follow-button'>
                    <FollowButton />
                  </td>
                </tr>

                <tr>
                  <td className='profile-pic'>
                    <img src='src/assets/images/member-3.png' />
                  </td>
                  <td className='profile-name'>
                    <p>Lily Halberd</p>
                    <p>@lilbeard</p>
                  </td>
                  <td className='follow-button'>
                    <FollowButton />
                  </td>
                </tr>

              </tbody>
            </table>

          </div>
        </div>

      </div>
    </>
  );
};

export default HomePage;
