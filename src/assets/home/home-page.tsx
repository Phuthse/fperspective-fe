import React, { useEffect, useState } from 'react';
import './home-page.css'
import SideNav from './SideNavigation/side-nav';
import HomePageFilter from './blog/HomePageFilter/home-page-filter';
import BlogList from './blog/BlogPost/blog-list';
import RightSideBar from './RightSideNav/right-side-nav';
import { loginApi } from '../../config/axios';
import User from '../../model/user';

import { useParams } from 'react-router-dom';

const HomePage: React.FC = () => {

  console.log(loginApi)

  const { filter } = useParams();

  const initialUser : User = {
    userID: '',
    username: 'Loading...',
    bio: '',
    email: '',
    avatarUrl: '',
    campus: '',
    term: '',
    category: '',
    fullName: '',
    createdDate: 0,
    status: false,
    role: '',
    loginProvider: '',
    name: ''
  }

  const [loginUser, setLoginUser] = useState<User>(initialUser);
  const fetchLoginData = async () => {
    try {
      const response = await loginApi.get("/currentUser", { withCredentials: true });
      setLoginUser(response.data);
    } catch {
      window.location.href = `${import.meta.env.VITE_FRONTEND_URL}`;
    }
  };
  useEffect(() => {
    fetchLoginData();
  }, [loginApi]);

  const user = loginUser?.username as string;

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate.valueOf() - startDate.valueOf()) /
    (24 * 60 * 60 * 1000));
  const week = Math.ceil(days / 7);

  return (
    <div className="container">
      <SideNav />
      <div className='home-page-main-content'>
        <HomePageFilter />
        {filter === 'latest' ? (
          <BlogList uri={"/sort/latest"} />
        ) : filter === 'top' || filter === 'week' ? (
          <BlogList uri={`/sort/blog/week/${year}/${month}/${week}`} />
        ) : filter === 'month' ? (
          <BlogList uri={`/sort/blog/month/${year}/${month}`} />
        ) : filter === 'year' ? (
          <BlogList uri={`/sort/blog/year/${year}`} />
        ) : filter === 'all' ? (
          <BlogList uri={"/sort/all"} />
        ) : filter === 'approve' ? (
          <BlogList uri={"/approve/all"} />
        ) : filter === undefined ? (
          <BlogList uri={"/sort/latest"} />
        ) : null}
      </div>

      <RightSideBar
        tagUri={"/sort/4"}
        subjectUri={'/sort/4'}
        userUri={`/recommend/all/${loginUser?.userID}`}
        currentUser={user}
      />

    </div>
  );
};

export default HomePage;
