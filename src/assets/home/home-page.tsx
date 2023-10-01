import React from 'react';
import { HomeIcon } from '@heroicons/react/24/solid';
import './home-page.css'; // Import your CSS file for styling
import FollowButton from './follow-button';
import UpAndDownVoteButton from './up-down-vote-button';

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
        <div className='main-content'>

          <div className="post-container">

            <div className="user-profile">
              <img src='src/assets/images/profile-pic.png' />
              <div className='user-info'>
                <p>John Wingman</p>
                <small>Oct 1 (2 hours ago)</small>
              </div>
            </div>
            <h2 className='post-title'>
              <a href='#'>Top 10 useful things when applying for a job relating to Python</a>
            </h2>

            <div className='post-tags'>
              <a href='#' className='tag'>
                #javascript
              </a>
              <a href='#' className='tag'>
                #react.js
              </a>
              <a href='#' className='tag'>
                #programming
              </a>
            </div>

            <div className="post-details">
              <UpAndDownVoteButton />
              <a href='#' className='post-comment'>
                11 Comment
              </a>
            </div>

          </div>

          <div className="post-container">

            <div className="user-profile">
              <img src='src/assets/images/member-4.png' />
              <div className='user-info'>
                <p>Danny Strongarm</p>
                <small>Sep 23 (8 days ago)</small>
              </div>
            </div>
            <h2 className='post-title'>
              <a href='#'>How to get started on front-end developping</a>
            </h2>

            <div className='post-tags'>
              <a href='#' className='tag'>
                #front-end
              </a>
              <a href='#' className='tag'>
                #boostrap
              </a>
              <a href='#' className='tag'>
                #programming
              </a>
            </div>

            <div className="post-details">
              <UpAndDownVoteButton />
              <a href='#' className='post-comment'>
                15 Comment
              </a>
            </div>

          </div>

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
