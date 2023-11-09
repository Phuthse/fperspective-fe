import React from 'react';
import './user-dashboard-side-nav.css';
import { useUserDashboard } from '../user-dashboard-context';
import { Link } from 'react-router-dom';


type UserDashboardSideNavProps = {
    NumberOfPost: number;
    NumberOfFollowers: number;
    NumberOfFollowingTags: number;
    NumberOfFollowingUsers: number;
}


const UserDashboardSideNav: React.FC<UserDashboardSideNavProps> = ({
    NumberOfPost,
    NumberOfFollowers,
    NumberOfFollowingTags,
    NumberOfFollowingUsers,
}) => {

    const { selectedNavItem, setSelectedNavItem } = useUserDashboard();

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
                            <span>{NumberOfPost}</span>
                        </a>
                    </li>

                    <li
                        className={`user-dashboard-left-nav-link ${selectedNavItem === 'followers' ? 'active' : ''}`}
                        onClick={() => setSelectedNavItem('followers')}
                    >
                        <a>
                            Followers
                            <span>{NumberOfFollowers}</span>
                        </a>
                    </li>

                    <li
                        className={`user-dashboard-left-nav-link ${selectedNavItem === 'followingTags' ? 'active' : ''}`}
                        onClick={() => setSelectedNavItem('followingTags')}
                    >
                        <a>
                            Following tags
                            <span>{NumberOfFollowingTags}</span>
                        </a>
                    </li>

                    <li
                        className={`user-dashboard-left-nav-link ${selectedNavItem === 'followingUsers' ? 'active' : ''}`}
                        onClick={() => setSelectedNavItem('followingUsers')}
                    >
                        <a>
                            Following users
                            <span>{NumberOfFollowingUsers}</span>
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
