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

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const week = Math.ceil(day / 7);

  return (
    <div className="container">
      <SideNav />

      <div className='home-page-main-content'>
        <HomePageFilter onFilterChange={handleFilterChange} />
        {currentFilter === 'Latest' ? (
          <BlogList uri={"/sort/latest"} />
        ) : currentFilter === 'Top' || currentFilter === 'Week' ? (
          <BlogList uri={`/sort/week/${year}/${month}/${week}`} />
        ) : currentFilter === 'Month' ? (
          <BlogList uri={`/sort/month/${year}/${month}`} />
        ) : currentFilter === 'Year' ? (
          <BlogList uri={`/sort/year/${year}`} />
        ) : currentFilter === 'AllTime' ? (
          <BlogList uri={"/sort/all"} />
        ) : currentFilter === 'Approve' ? (
          <h1>Approve page</h1>
        ) : null}
      </div>

      <RightSideBar tagUri={"/sort/4"} />
    </div>
  );
};

export default HomePage;
