import React from 'react';
import './user-profile.css'
import User from '../../../../model/user';
import { Link } from 'react-router-dom';

type UserProfileProps = {
    user: User;
    time: string;
}

const PostUserProfile: React.FC<UserProfileProps> = ({ user, time }) => {
    const postDate = new Date(time);
    const currentDate = new Date();
    const timeDiffMillis = currentDate.getTime() - postDate.getTime();
    const timeDiffMinutes = Math.floor(timeDiffMillis / (1000 * 60)) as number; // Explicitly cast to number

    let formattedTime = '';

    if (timeDiffMinutes < 60) {
        formattedTime = 'less than 1 hour ago';
    } else if (timeDiffMinutes < 1440) {
        const hoursAgo = Math.floor(timeDiffMinutes / 60);
        formattedTime = `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago`;
    } else if (timeDiffMinutes < 10080) {
        const daysAgo = Math.floor(timeDiffMinutes / 1440);
        formattedTime = `${postDate.toLocaleDateString()} (${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago)`;
    } else if (timeDiffMinutes < 40320) {
        const weeksAgo = Math.floor(timeDiffMinutes / 10080);
        formattedTime = `${postDate.toLocaleDateString()} (${weeksAgo} ${weeksAgo === 1 ? 'week' : 'weeks'} ago)`;
    } else if (timeDiffMinutes < 525600) {
        const monthsAgo = Math.floor(timeDiffMinutes / 40320);
        formattedTime = `${postDate.toLocaleDateString()} (${monthsAgo} ${monthsAgo === 1 ? 'month' : 'months'} ago)`;
    } else {
        const yearsAgo = Math.floor(timeDiffMinutes / 525600);
        formattedTime = `${postDate.toLocaleDateString()} (${yearsAgo} ${yearsAgo === 1 ? 'year' : 'years'} ago)`;
    }

    return (
        <div className="home-page-user-profile">
            <Link to={`/user-profile/${user.userID}`}>
                <img src={user.avatarUrl} alt={user.username} referrerPolicy="no-referrer" />
                <div className='home-page-user-info'>
                    <p>{user.fullName}</p>
                    <small>{formattedTime}</small>
                </div>
            </Link>
        </div>
    );
};

export default PostUserProfile;
