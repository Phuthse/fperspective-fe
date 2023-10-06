import React from 'react';
import './user-dashboard.css'; // Import your CSS file for styling
import TopNav from '../../home/TopNavigation/top-nav';
import RecentPost from './UserDashBoardRecentPost/recent-post';
import UserDashboardSideNav from './UserDashBoardSideNav/user-dashboard-side-nav';
import UserOverview from './UserOverview/user-overview';

const blogTags1 = ["JavaScript", "React.js", "CSS", "Web Development"];

const UserDashboard: React.FC = () => {
    return (
        <>
            <TopNav />
            <div className="container">

                <div className='main-content'>
                    <UserOverview
                        TotalPosts={100}
                        TotalUpvotes={2530}
                        TotalCredits={3999}
                    />

                    <div className='user-dashboard-nav-content-container'>
                        <UserDashboardSideNav
                            NumberOfPost={1}
                            NumberOfFollowers={42}
                            NumberOfFollowingTags={53}
                            NumberOfFollowingUsers={85}
                            NumberOfHiddenTags={8}
                        />

                        <div className="user-dashboard-content">
                            <h2>Recent Post</h2>

                            <RecentPost
                                blogTitle="Getting Started with React.js"
                                blogTags={blogTags1}
                                upvote={8541}
                                numberOfComment={10}
                            />

                            <RecentPost
                                blogTitle="My 50 years coding adventure"
                                blogTags={blogTags1}
                                upvote={9999}
                                numberOfComment={234}
                            />

                            <RecentPost
                                blogTitle="How I learn backend developing while working a frontend job"
                                blogTags={blogTags1}
                                upvote={2399}
                                numberOfComment={13}
                            />

                        </div>
                    </div>

                </div>

            </div >
        </>
    );
};

export default UserDashboard;
