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
            <button type="submit" aria-label="Search" className="c-btn c-btn--icon-alone absolute inset-px left-auto mt-0 py-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="crayons-icon c-btn__icon" focusable="false">
                <path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z">
                </path>
              </svg>
            </button>
          </Link>
        </div>

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
