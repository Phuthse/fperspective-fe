import React from 'react';
import './top-nav.css'

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

                <div className='nav-user-icon online'>
                    <img src='src/assets/images/profile-pic.png' />
                </div>

            </div>
        </nav>
    );
};

export default TopNav;
