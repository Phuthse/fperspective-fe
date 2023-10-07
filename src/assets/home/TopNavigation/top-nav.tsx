import React from 'react';
import './top-nav.css';

const TopNav: React.FC = () => {

    return (
        <nav className='top-nav'>
            <div className="nav-left">
                <img
                    src='src/assets/images/fperspective-logo.png'
                    className='logo'
                />
            </div>
            <div className="nav-right">
                <div className='search-box'>
                    <img src='src/assets/images/search.png' />
                    <input type='text' placeholder='Search' />
                </div>

                <div className='nav-user-icon'>
                    <img src='src/assets/images/profile-pic.png' />
                    <div className="dropdown-content">
                        <a href='#'>Dashboard</a>
                        <a href='#'>Logout</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
