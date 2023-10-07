import React from 'react';
import './user-dashboard-side-nav.css';
import { useUserDashboard } from '../user-dashboard-context';


type UserDashboardSideNavProps = {
    NumberOfPost: number;
    NumberOfFollowers: number;
    NumberOfFollowingTags: number;
    NumberOfFollowingUsers: number;
    NumberOfHiddenTags: number;
}


const UserDashboardSideNav: React.FC<UserDashboardSideNavProps> = ({
    NumberOfPost,
    NumberOfFollowers,
    NumberOfFollowingTags,
    NumberOfFollowingUsers,
    NumberOfHiddenTags
}) => {

    const { selectedNavItem, setSelectedNavItem } = useUserDashboard();

    return (
        <div className="user-dashboard-left-nav">
            <nav>
                <ul className="user-dashboard-left-nav-list">
                    <li className={`user-dashboard-left-nav-link ${selectedNavItem === 'posts' ? 'active' : ''}`}
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
                        className={`user-dashboard-left-nav-link ${selectedNavItem === 'followingUsers' ? 'active' : ''}`}
                        onClick={() => setSelectedNavItem('followingUsers')}
                    >
                        <a>
                            Following users
                            <span>{NumberOfFollowingUsers}</span>
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
                        className={`user-dashboard-left-nav-link ${selectedNavItem === 'hiddenTags' ? 'active' : ''}`}
                        onClick={() => setSelectedNavItem('hiddenTags')}
                    >
                        <a>
                            Hidden tags
                            <span>{NumberOfHiddenTags}</span>
                        </a>
                    </li>

                    {/* <li>
                        <a
                            className="user-dashboard-left-nav-link"
                            href="/dashboard/analytics"
                        >
                            Analytics (Maybe)
                        </a>
                    </li> */}

                </ul>
            </nav>

        </div>
    );
};

export default UserDashboardSideNav;
