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

  const initialUser: User = {
    userID: "1",
    username: "Loading...",
    bio: "Loading...",
    email: "Loading...",
    avatarUrl: "Loading...",
    campus: "Loading...",
    term: "Loading...",
    category: "Loading...",
    fullName: "Loading...",
    createdDate: 2,
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
      // window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`;
    }
  };
  useEffect(() => {
    fetchLoginData();
  }, [loginApi]);

  const user = loginUser?.username as string;

  // const currentDate = new Date();
  // const year = currentDate.getFullYear();
  // const month = currentDate.getMonth() + 1;
  // const startDate = new Date(currentDate.getFullYear(), 0, 1);
  // const days = Math.floor((currentDate.valueOf() - startDate.valueOf()) /
  //   (24 * 60 * 60 * 1000));
  // const week = Math.ceil(days / 7);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const calculateDateRange = (selectedFilter: string | undefined) => {
    const today = new Date();
    const startDate = new Date();
    if (selectedFilter === 'top' || selectedFilter === 'week') {
      startDate.setDate(today.getDate() - 7);
    } else if (selectedFilter === 'month') {
      startDate.setDate(today.getDate() - 28);
    } else if (selectedFilter === 'year') {
      startDate.setFullYear(today.getFullYear() - 1);
    }
    return {
      startDateString: formatDate(startDate),
      endDateString: formatDate(today),
    };
  };
  const { startDateString, endDateString } = calculateDateRange(filter);

  return (
    <div className="container">
      <SideNav />
      <div className='home-page-main-content'>
        <HomePageFilter />
        {filter === 'latest' ? (
          <BlogList uri={"/sort/latest"} />
        ) : filter === 'top' || filter === 'week' ? (
          <BlogList uri={`/sort/date/range/${startDateString}/${endDateString}`} />
        ) : filter === 'month' ? (
          <BlogList uri={`/sort/date/range/${startDateString}/${endDateString}`} />
        ) : filter === 'year' ? (
          <BlogList uri={`/sort/date/range/${startDateString}/${endDateString}`} />
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
