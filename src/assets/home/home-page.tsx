import React from 'react';
import Layout from './navigation/layout.tsx';
import BlogTable from './blog-table';
import './home-page.css'; // Import your CSS file for styling

const HomePage: React.FC = () => {
  return (
    <nav>
      <div className="nav-left">
        <img
          src='src/assets/images/fperspective-logo.png'
          className='logo'
        />
        <ul>
          <li><img src='src/assets/images/notification.png'/></li>
          <li><img src='src/assets/images/inbox.png'/></li>
          <li><img src='src/assets/images/video.png'/></li>
        </ul>
      </div>
      <div className="nav-right">
        <div className='search-box'>

        </div>
      </div>
    </nav>
  );
};

export default HomePage;
