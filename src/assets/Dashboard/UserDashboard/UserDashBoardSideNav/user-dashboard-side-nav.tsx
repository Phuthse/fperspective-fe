import React from 'react';
import './user-dashboard-side-nav.css';


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

    return (
        <div className="user-dashboard-left-nav">
            <nav>
                <ul className="user-dashboard-left-nav-list">
                    <li>
                        <a
                            className="user-dashboard-left-nav-link"
                            href="/dashboard"
                        >
                            Posts
                            <span>{NumberOfPost}</span>
                        </a>
                    </li>

                    <li>
                        <a
                            className="user-dashboard-left-nav-link "
                            href="/dashboard/user_followers"
                        >
                            Followers
                            <span>{NumberOfFollowers}</span>
                        </a>
                    </li>

                    <li>
                        <a
                            className="user-dashboard-left-nav-link "
                            href="/dashboard/following_tags"
                        >
                            Following tags
                            <span>{NumberOfFollowingTags}</span>
                        </a>
                    </li>

                    <li>
                        <a
                            className="user-dashboard-left-nav-link "
                            href="/dashboard/following_users"
                        >
                            Following users
                            <span>{NumberOfFollowingUsers}</span>
                        </a>
                    </li>

                    <li>
                        <a
                            className="user-dashboard-left-nav-link"
                            href="/dashboard/hidden_tags"
                        >
                            Hidden tags
                            <span>{NumberOfHiddenTags}</span>
                        </a>
                    </li>

                    <li>
                        <a
                            className="user-dashboard-left-nav-link"
                            href="/dashboard/analytics"
                        >
                            Analytics (Maybe)
                        </a>
                    </li>

                </ul>
            </nav>

        </div>
    );
};

export default UserDashboardSideNav;
