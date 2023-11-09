import React from 'react';
import './user-dashboard.css'; // Import your CSS file for styling
import UserOverview from './UserOverview/user-overview';
import UserDashboardSideNav from './UserDashBoardSideNav/user-dashboard-side-nav';
import UserDashoardContent from './UserDashboardContent/user-dashboard-content';
import { UserDashboardProvider } from './user-dashboard-context';

const UserDashboard: React.FC = () => {
    return (
        <>
            <div className="user-dashboard-container">

                <div className='user-dashboard-main-content'>
                    <UserOverview />

                    <div className='user-dashboard-nav-content-container'>

                        <UserDashboardProvider>
                            <UserDashboardSideNav
                                NumberOfPost={1}
                                NumberOfFollowers={42}
                                NumberOfFollowingTags={53}
                                NumberOfFollowingUsers={85}
                                NumberOfHiddenTags={8}
                            />
                            <UserDashoardContent />
                        </UserDashboardProvider>

                    </div>


                </div>

            </div >
        </>
    );
};

export default UserDashboard;
