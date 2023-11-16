import React, { useEffect, useState } from 'react';
import './home-page.css'
import SideNav from './SideNavigation/side-nav';
import BlogList from './blog/BlogPost/blog-list';
import RightSideBar from './RightSideNav/right-side-nav';
import { loginApi } from '../../config/axios';
import User from '../../model/user';
import { useParams } from 'react-router-dom';
import SubjectFilteredHomePageFilter from './blog/HomePageFilter/subject-filtered-home-page-filter';

const SubjectFilteredHomePage: React.FC = () => {

    const { filter } = useParams();
    const { subjectFilter } = useParams();

    const [loginUser, setLoginUser] = useState<User>();
    const fetchLoginData = async () => {
        try {
            const response = await loginApi.get("/currentUser", { withCredentials: true });
            setLoginUser(response.data);
        }
        catch {
            window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`
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
            <h1 className='current-home-page-filter'>Filtering by<span>&nbsp;{subjectFilter}</span></h1>
            <div className="container">
                <SideNav />
                <div className='home-page-main-content'>
                    <SubjectFilteredHomePageFilter />
                    {filter === 'latest' ? (
                        <BlogList uri={`/search/subject/${subjectFilter}/-1`} />
                    ) : filter === 'top' || filter === 'week' ? (
                        <BlogList uri={`/sort/subject/week/${year}/${month}/${week}/${subjectFilter}`} />
                    ) : filter === 'month' ? (
                        <BlogList uri={`/sort/subject/month/${year}/${month}/${subjectFilter}`} />
                    ) : filter === 'year' ? (
                        <BlogList uri={`/sort/subject/year/${year}/${subjectFilter}`} />
                    ) : filter === 'all' ? (
                        <BlogList uri={`sort/subject/${subjectFilter}`} />
                    ) : filter === undefined ? (
                        <BlogList uri={`/search/subject/${subjectFilter}/-1`} />
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

export default SubjectFilteredHomePage;
