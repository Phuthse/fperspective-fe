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

        <div className="user-analytic-content">

            {/* Display user's recent posts */}
            {selectedNavItem === 'posts' && (
                <>
                    <UserAnalyticPostCharts />
                </>
            )}

            {/* Display user's upvotes */}
            {selectedNavItem === 'upvotes' && (
                <>
                    <UserAnalyticUpvoteCharts />
                </>
            )}

            {/* Display user's comments */}
            {selectedNavItem === 'comments' && (
                <>
                    <UserAnalyticCommentCharts />
                </>
            )}

            {/* Display user's followers */}
            {selectedNavItem === 'followers' && (
                <>
                    <UserAnalyticFollowerCharts />
                </>
            )}

        </div>
    );
};

export default UserAnalyticContent;
