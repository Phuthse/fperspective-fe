import React, { useEffect, useState } from 'react';
import './home-page.css'
import SideNav from './SideNavigation/side-nav';
import HomePageFilter from './blog/HomePageFilter/home-page-filter';
import BlogList from './blog/BlogPost/blog-list';
import RightSideBar from './RightSideNav/right-side-nav';
import { loginApi } from '../../config/axios';
import User from '../../model/user';

import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom

const HomePage: React.FC = () => {
  const { filter } = useParams();

  const [currentFilter, setCurrentFilter] = useState(filter || 'Latest');

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

      <RightSideBar tagUri={"/sort/4"} userUri={`/recommend/all`} currentUser = {user} />
    </div>
  );
};

export default HomePage;
