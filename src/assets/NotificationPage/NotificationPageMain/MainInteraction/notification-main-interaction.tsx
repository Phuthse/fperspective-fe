import React from 'react';
import './notification-main-interaction.css';

type NotificationPageMainInteractionProp = {
    ProfileImage: string;
    FullName: string;
    DateTime: string; // DateTime attribute in the format 'YYYY-MM-DD'
    ReactedPost: string;
};

const NotificationPageMainInteraction: React.FC<NotificationPageMainInteractionProp> = ({
    ProfileImage,
    FullName,
    DateTime,
    ReactedPost
}) => {
    const notificationTime = new Date(DateTime);
    const currentTime = new Date();

    const timeDiffInMilliseconds = currentTime.getTime() - notificationTime.getTime();
    const hoursDiff = Math.floor(timeDiffInMilliseconds / (1000 * 60 * 60));

    const formatTimeDifference = () => {
        if (hoursDiff < 24) {
            return `${hoursDiff} hour${hoursDiff !== 1 ? 's' : ''} ago`;
        } else if (hoursDiff < 168) { // 7 days (24 hours * 7 days)
            const daysDiff = Math.floor(hoursDiff / 24);
            return `${daysDiff} day${daysDiff !== 1 ? 's' : ''} ago`;
        } else if (hoursDiff < 672) { // 4 weeks (7 days * 4 weeks)
            const weeksDiff = Math.floor(hoursDiff / 168);
            return `${weeksDiff} week${weeksDiff !== 1 ? 's' : ''} ago`;
        } else {
            const monthsDiff = Math.floor(hoursDiff / 672); // Approximately 4.33 weeks in a month
            return `${monthsDiff} month${monthsDiff !== 1 ? 's' : ''} ago`;
        }
    };

    return (
        <div className="notification-page-main-upvote">
            <div className="notification-page-upvote-profile">
                <a href='#'>
                    <img src={ProfileImage} alt={FullName} />
                </a>
                <div className="notification-page-upvote-detail">
                    <div>
                        <a href='#'>
                            {FullName}
                        </a>
                        <p>&nbsp;commented on your post&nbsp;</p>
                        <a href='#'>
                            {ReactedPost}
                        </a>
                    </div>


                    <small>{formatTimeDifference()}</small>
                </div>
            </div>
        </div>
    );
};

export default NotificationPageMainInteraction;
