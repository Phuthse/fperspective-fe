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
            window.location.href = 'http://localhost:5173/login';
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
        <>
            <h1 className='current-home-page-filter'>Filtering by<span>&nbsp;{tagFilter}</span></h1>
            <div className="container">
                <SideNav />
                <div className='home-page-main-content'>
                    <TagFilteredHomePageFilter />
                    {filter === 'latest' ? (
                        <BlogList uri={`/search/tag/${tagFilter}/-1`} />
                    ) : filter === 'top' || filter === 'week' ? (
                        <BlogList uri={`/sort/tag/week/${year}/${month}/${week}/${tagFilter}`} />
                    ) : filter === 'month' ? (
                        <BlogList uri={`/sort/tag/month/${year}/${month}/${tagFilter}`} />
                    ) : filter === 'year' ? (
                        <BlogList uri={`/sort/tag/year/${year}/${tagFilter}`} />
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
