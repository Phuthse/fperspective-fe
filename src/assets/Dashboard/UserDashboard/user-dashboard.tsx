import React from 'react';
import './user-dashboard.css'; // Import your CSS file for styling
import UserOverview from './UserOverview/user-overview';
import UserDashboardSideNav from './UserDashBoardSideNav/user-dashboard-side-nav';
import UserDashoardContent from './UserDashboardContent/user-dashboard-content';
import { UserDashboardProvider } from './user-dashboard-context';

const blogTags1 = ["JavaScript", "React.js", "CSS", "Web Development"];

const UserDashboard: React.FC = () => {
    return (
        <>
            <div className="container">

                <div className='main-content'>
                    <UserOverview
                        TotalPosts={100}
                        TotalUpvotes={2530}
                        TotalCredits={3999}
                    />

                    <div className='user-dashboard-nav-content-container'>

                        <UserDashboardProvider>
                            <UserDashboardSideNav
                                NumberOfPost={1}
                                NumberOfFollowers={42}
                                NumberOfFollowingTags={53}
                                NumberOfFollowingUsers={85}
                                NumberOfHiddenTags={8}
                            />
                            <UserDashoardContent blogTags={blogTags1} />
                        </UserDashboardProvider>

                    </div>

                </div>

            </div >
        </>
    );
};

export default UserDashboard;
