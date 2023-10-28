import React from 'react';
import './notification-main-comment.css';

type NotificationPageMainInteractionProp = {
    ProfileImage: string;
    FullName: string;
    CommentedPost: string;
    DateTime: string; // DateTime attribute in the format 'YYYY-MM-DD'
    CommentContent: string;
};

const NotificationPageMainComment: React.FC<NotificationPageMainInteractionProp> = ({
    ProfileImage,
    FullName,
    CommentedPost,
    DateTime,
    CommentContent
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
        <div className="notification-page-main-comment">
            <div className="notification-page-comment-profile">
                <a href='#'>
                    <img src={ProfileImage} alt={FullName} />
                </a>
                <div className="notification-page-comment-detail">
                    <div>
                        <a href='#'>
                            {FullName}
                        </a>
                        <p>&nbsp;commented on your post&nbsp;</p>
                        <a href='#'>
                            {CommentedPost}
                        </a>
                    </div>

                    <small>{formatTimeDifference()}</small>

                    <a href='#' className='notification-page-comment-detail-title'>
                        <h3>"{CommentContent}"</h3>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default NotificationPageMainComment;
