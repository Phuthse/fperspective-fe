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
            <h1 className='current-home-page-filter'>Filtering by<span>&nbsp;{subjectFilter}</span></h1>
            <div className="container">
                <SideNav />
                <div className='home-page-main-content'>
                    <SubjectFilteredHomePageFilter />
                    {filter === 'latest' ? (
                        <BlogList uri={`/search/subject/${subjectFilter}/-1`} />
                    ) : filter === 'top' || filter === 'week' ? (
                        <BlogList uri={`/sort/subject/date/${startDateString}/${endDateString}/${subjectFilter}`} />
                    ) : filter === 'month' ? (
                        <BlogList uri={`/sort/subject/date/${startDateString}/${endDateString}/${subjectFilter}`} />
                    ) : filter === 'year' ? (
                        <BlogList uri={`/sort/subject/date/${startDateString}/${endDateString}/${subjectFilter}`} />
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
