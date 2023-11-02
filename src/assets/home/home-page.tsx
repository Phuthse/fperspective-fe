import React, { useState } from 'react';
import './home-page.css'
import SideNav from './SideNavigation/side-nav';
import BlogListLatest from './blog/BlogListLatest/blog-list-latest';
import HomePageFilter from './blog/HomePageFilter/home-page-filter';
import RightSideBar from './RightSideNav/right-side-nav';


const HomePage: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState('Latest');

  const handleFilterChange = (filter: string) => {
    setCurrentFilter(filter);
  };

  return (
    <>
      <div className="container">

        <SideNav />

        <div className='home-page-main-content'>
          <HomePageFilter onFilterChange={handleFilterChange} />
          {currentFilter === 'Latest' ? (
            <>
              <BlogListLatest uri={"/show"} />
            </>

          ) : currentFilter === 'Top' || currentFilter === 'Week' ? (
            <h1> Top Week</h1>
          ) : currentFilter === 'Month' ? (
            <h1> Top Month</h1>
          ) : currentFilter === 'Year' ? (
            <h1> Top Year</h1>
          ) : currentFilter === 'AllTime' ? (
            <h1> Top All</h1>
          ) : null}
        </div>

        {/* Right nav bar (trending tags)*/}
        <RightSideBar uri = {"/sort/most"}/>
      </div>
    </>
  );
};

export default HomePage;
