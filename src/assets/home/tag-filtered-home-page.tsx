import React, { useEffect, useState } from 'react';
import './home-page.css'
import SideNav from './SideNavigation/side-nav';
import BlogList from './blog/BlogPost/blog-list';
import RightSideBar from './RightSideNav/right-side-nav';
import { loginApi } from '../../config/axios';
import User from '../../model/user';

import { useParams } from 'react-router-dom';
import TagFilteredHomePageFilter from './blog/HomePageFilter/tag-filtered-home-page-filter';


const TagFilteredHomePage: React.FC = () => {

    const { filter } = useParams();

    const { tagFilter } = useParams();

    const [loginUser, setLoginUser] = useState<User>();
    const fetchLoginData = async () => {
        try {
            const response = await loginApi.get("/currentUser", { withCredentials: true });
            setLoginUser(response.data);
        } catch (error) {
            window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`;
        }
    };
    useEffect(() => {
        fetchLoginData();
    }, [loginApi]);

    const user = loginUser?.username as string;

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
        <>
            <h1 className='current-home-page-filter'>Filtering by<span>&nbsp;{tagFilter}</span></h1>
            <div className="container">
                <SideNav />
                <div className='home-page-main-content'>
                    <TagFilteredHomePageFilter />
                    {filter === 'latest' ? (
                        <BlogList uri={`/search/tag/${tagFilter}/-1`} />
                    ) : filter === 'top' || filter === 'week' ? (
                        <BlogList uri={`/sort/tag/date/${startDateString}/${endDateString}/${tagFilter}`} />
                    ) : filter === 'month' ? (
                        <BlogList uri={`/sort/tag/date/${startDateString}/${endDateString}/${tagFilter}`} />
                    ) : filter === 'year' ? (
                        <BlogList uri={`/sort/tag/date/${startDateString}/${endDateString}/${tagFilter}`} />
                    ) : filter === 'all' ? (
                        <BlogList uri={`/sort/tag/${tagFilter}`} />
                    ) : filter === undefined ? (
                        <BlogList uri={`/search/tag/${tagFilter}/-1`} />
                    ) : null}
                </div>

                <RightSideBar
                    tagUri={"/sort/4"}
                    subjectUri='/sort/4'
                    userUri={`/recommend/all`}
                    currentUser={user}
                />
            </div>
        </>
    );
};

export default TagFilteredHomePage;
