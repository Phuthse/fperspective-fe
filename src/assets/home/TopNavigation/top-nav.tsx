import React from "react";
import "./top-nav.css";
import { Link } from "react-router-dom";

const TopNav: React.FC = () => {
  return (
    <nav className="top-nav">
      <div className="nav-left">
        <Link to="/"><img src="src/images/fperspective-logo.png" alt="" className="logo" /></Link>
      </div>

      <div className="nav-right">

        <div className="search-box">
          <input type="text" placeholder="Search" />
          <Link to='/search'>
            <button type="submit" className="top-nav-search-button">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z">
                </path>
              </svg>
            </button>
          </Link>
        </div>
        <Link to='/notification'>
          <svg fill="white" width="24" height="24" viewBox="0 0 24 24">
            <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
          </svg>
        </Link>

        <div className='nav-user-icon'>
          <img src='src/images/profile-pic.png' />
          <div className="dropdown-content">
            <Link to='/create-blog'>Write a Blog</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to='/login'>Login</Link>
            <Link to='/sign-up'>Sign up</Link>
            <Link to='/user-profile'>User Profile (General)</Link>
            <a href='#'>Logout</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
