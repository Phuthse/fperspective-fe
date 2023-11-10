import React, { useEffect, useState } from 'react';
import './user-dashboard-side-nav.css';
import { useUserDashboard } from '../user-dashboard-context';
import { Link } from 'react-router-dom';
import User from '../../../../model/user';
import Follow from '../../../../model/follow';
import { blogApi, followApi } from '../../../../config/axios';
import Blog from '../../../../model/blog';


type UserDashboardSideNavProps = {
    currentUser?: User;
}


const UserDashboardSideNav: React.FC<UserDashboardSideNavProps> = ({
    currentUser,
}) => {

    const { selectedNavItem, setSelectedNavItem } = useUserDashboard();

    const [CurrentUser, SetCurrentUser] = useState<Follow>();
    const fetchFollowData = async () => {
        try {
            const response = await followApi.get(`show/user/${currentUser?.userID}`, { withCredentials: true });
            SetCurrentUser(response.data);
        } catch (error) {
            console.error('Error fetching follow data:', error);
        }
    };
    useEffect(() => {
        fetchFollowData();
    }, [currentUser]);

    const [blogs, setBlogs] = useState<Blog[]>([]);
    const fetchBlogData = async () => {
        const response = await blogApi.get(`/sort/user/${currentUser?.userID}`, { withCredentials: true })
        setBlogs(response.data);
    };
    useEffect(() => {
        fetchBlogData();
    }, [currentUser]);


    const [followers, setFollowers] = useState<string[]>([]);
    const fetchFollowerData = async () => {
        try {
            const response = await followApi.get(`/show/count/${currentUser?.userID}`, { withCredentials: true });
            setFollowers(response.data);
        } catch (error) {
            console.error('Error fetching follow data:', error);
        }
    };
    useEffect(() => {
        fetchFollowerData();
    }, [currentUser]);

    return (
        <div className="user-dashboard-left-nav">
            <nav>
                <ul className="user-dashboard-left-nav-list">
                    <li
                        className={`user-dashboard-left-nav-link ${selectedNavItem === 'posts' ? 'active' : ''}`}
                        onClick={() => setSelectedNavItem('posts')}
                    >
                        <a>
                            Posts
                            <span>{blogs.length}</span>
                        </a>
                    </li>

                    <li
                        className={`user-dashboard-left-nav-link ${selectedNavItem === 'followers' ? 'active' : ''}`}
                        onClick={() => setSelectedNavItem('followers')}
                    >
                        <a>
                            Followers
                            <span>{followers.length}</span>
                        </a>
                    </li>

                    <li
                        className={`user-dashboard-left-nav-link ${selectedNavItem === 'followingUsers' ? 'active' : ''}`}
                        onClick={() => setSelectedNavItem('followingUsers')}
                    >
                        <a>
                            Following users
                            <span>{CurrentUser?.followedUser.length}</span>
                        </a>
                    </li>

                    <li
                        className={`user-dashboard-left-nav-link ${selectedNavItem === 'analytic' ? 'active' : ''}`}
                        onClick={() => setSelectedNavItem('analytic')}
                    >
                        <Link to='/user-analytic'>Analytic</Link>
                    </li>

                </ul>
            </nav>

        </div>
    );
};

export default UserDashboardSideNav;
