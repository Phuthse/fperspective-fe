import React from "react";
import "./top-nav.css";
import { Link } from "react-router-dom";

const TopNav: React.FC = () => {
  return (
    <nav className="top-nav">
      <div className="nav-left">
        <Link to="/"><img src="src/assets/images/fperspective-logo.png" alt="" className="logo" /></Link>
      </div>

      <div className="nav-right">

        <div className="search-box">
          <img src="src/assets/images/search.png" alt=""/>
          <input type="text" placeholder="Search" />
        </div>



        <div className='nav-user-icon'>
          <img src='src/assets/images/profile-pic.png' />
          <div className="dropdown-content">
            <Link to='/create-blog'>Write a Blog</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to='/login'>Login</Link>
            <Link to='/sign-up'>Sign up</Link>
            <a href='#'>Logout</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
