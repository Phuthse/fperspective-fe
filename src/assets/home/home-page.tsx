import React, { useState } from 'react';
import './home-page.css'
import SideNav from './SideNavigation/side-nav';
import BlogList from './blog/BlogPost/blog-list';
import HomePageFilter from './blog/HomePageFilter/home-page-filter';
import RightSideBar from './RightSideNav/right-side-nav';


const HomePage: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState('Latest');

  const handleFilterChange = (filter: string) => {
    setCurrentFilter(filter);
  };

  return (
    <div className="container">
      <SideNav />

      <div className='home-page-main-content'>
        <HomePageFilter onFilterChange={handleFilterChange} />
        {currentFilter === 'Latest' ? (
          <BlogList uri={"/sort/latest"} />
        ) : currentFilter === 'Top' || currentFilter === 'Week' ? (
          <BlogList uri={"/sort/week"} />
        ) : currentFilter === 'Month' ? (
          <BlogList uri={"/sort/month"} />
        ) : currentFilter === 'Year' ? (
          <BlogList uri={"/sort/year"} />
        ) : currentFilter === 'AllTime' ? (
          <BlogList uri={"/sort/all"} />
        ) : null}
      </div>

      <RightSideBar tagUri={"/sort/4"} />
    </div>
  );
};

export default HomePage;
