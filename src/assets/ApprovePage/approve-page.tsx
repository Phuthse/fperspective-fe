import React, { useState } from 'react';
import './approve-page.css'
import SideNav from '../home/SideNavigation/side-nav';


const HomePage: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState('Latest');

  const handleFilterChange = (filter: string) => {
    setCurrentFilter(filter);
  };

  return (
    <div className="container">
      <SideNav />

      <div className='approve-page-main-content'>
        
      </div>
      
    </div>
  );
};

export default HomePage;
