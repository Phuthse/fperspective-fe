import React, { useEffect, useState } from 'react';
import './home-page.css'
import SideNav from './SideNavigation/side-nav';
import BlogListLatest from './blog/BlogListLatest/blog-list-latest';
import HomePageFilter from './blog/HomePageFilter/home-page-filter';
import RightSideBar from './RightSideNav/right-side-nav';
import { loginApi } from '../../config/axios';
import User from '../../model/user';


const HomePage: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState('Latest');

  const handleFilterChange = (filter: string) => {
    setCurrentFilter(filter);
  };

  const [loginUser, setLoginUser] = useState<User>();
  const fetchLoginData = async () => {
    const response = await loginApi.get("/currentUser", { withCredentials: true });
    setLoginUser(response.data);
  };
  useEffect(() => {
    fetchLoginData();
  }, [loginApi]);

  const user = loginUser?.username as string;

  return (
    <>
      <div className="container">

        <SideNav />

        <div className='home-page-main-content'>
          <HomePageFilter onFilterChange={handleFilterChange} />
          {currentFilter === 'Latest' ? (

            <>
              <BlogListLatest uri={"/sort/latest"} />
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
        <RightSideBar tagUri = {"/sort/4"} userUri={`/recommend/all`} currentUser = {user}/>
      </div>
    </>
  );
};

export default HomePage;
