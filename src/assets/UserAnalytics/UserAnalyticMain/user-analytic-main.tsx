import React from 'react';
import './user-analytic-main.css';
import { useUserAnalytic } from '../user-analytic-context';
import UserAnalyticPostCharts from './UserAnalyticMainPost/user-analytic-post';
import UserAnalyticUpvoteCharts from './UserAnalyticMainUpvote/user-analytic-upvote';
import UserAnalyticFollowerCharts from './UserAnalyticMainFollower/user-analytic-follower';
import UserAnalyticCommentCharts from './UserAnalyticMainComment/user-analytic-comment';



const UserAnalyticContent: React.FC = () => {

    const { selectedNavItem } = useUserAnalytic();

    return (

        <div className="admin-dashboard-content">

            {/* Display user's recent posts */}
            {selectedNavItem === 'posts' && (
                <>
                    <UserAnalyticPostCharts />
                </>
            )}

            {/* Display user's followers */}
            {selectedNavItem === 'upvotes' && (
                <>
                    <UserAnalyticUpvoteCharts />
                </>
            )}

            {/* Display user's following tags */}
            {selectedNavItem === 'comments' && (
                <>
                    <UserAnalyticCommentCharts />
                </>
            )}

            {/* Display user's following tags */}
            {selectedNavItem === 'followers' && (
                <>
                    <UserAnalyticFollowerCharts />
                </>
            )}

        </div>
    );
};

export default UserAnalyticContent;
