import React from 'react';
import './notification-page-main.css';
import { useNotificationPage } from '../notification-page-context';
import NotificationPageMainPost from './MainPost/notification-main-post';
import NotificationPageMainInteraction from './MainInteraction/notification-main-interaction';
import NotificationPageMainComment from './MainComment/notification-main-comment';

const NotificationPageMain: React.FC = () => {

    const { selectedNavItem } = useNotificationPage();

    return (

        <div className="notification-page-main-container">

            {selectedNavItem === 'all' && (
                <>
                    <NotificationPageMainPost
                        ProfileImage='https://sugargamers.com/wp-content/uploads/2022/11/Screenshot-2022-11-04-at-08.52.02.png'
                        FullName='Manly Man'
                        DatePosted='01 Sep 2022'
                        Title='Read this blog if you want to grow some chest hair'
                    />

                    <NotificationPageMainPost
                        ProfileImage='https://i1.sndcdn.com/avatars-lIjHNeHZwk2i4wmx-RbFNcw-t500x500.jpg'
                        FullName='Manlier Man'
                        DatePosted='10 Sep 2022'
                        Title='10 things I do before waking up, follow for the secret to be an alpha'
                    />

                    <NotificationPageMainInteraction
                        ProfileImage='https://i1.sndcdn.com/avatars-lIjHNeHZwk2i4wmx-RbFNcw-t500x500.jpg'
                        FullName='Manlier Man'
                        DateTime='2023-10-10'
                        ReactedPost='10 things I do before sleeping'
                    />

                    <NotificationPageMainComment
                        ProfileImage='https://i1.sndcdn.com/avatars-lIjHNeHZwk2i4wmx-RbFNcw-t500x500.jpg'
                        FullName='Manlier Man'
                        DateTime='2023-10-16'
                        CommentedPost='10 things I must have at all time'
                        CommentContent='Thanks for the post kind sir'
                    />
                </>
            )}

            {selectedNavItem === 'post' && (
                <>
                    <NotificationPageMainPost
                        ProfileImage='https://sugargamers.com/wp-content/uploads/2022/11/Screenshot-2022-11-04-at-08.52.02.png'
                        FullName='Manly Man'
                        DatePosted='01 Sep 2022'
                        Title='Read this blog if you want to grow some chest hair'
                    />

                    <NotificationPageMainPost
                        ProfileImage='https://i1.sndcdn.com/avatars-lIjHNeHZwk2i4wmx-RbFNcw-t500x500.jpg'
                        FullName='Manlier Man'
                        DatePosted='10 Sep 2022'
                        Title='10 things I do before waking up, follow for the secret to be an alpha'
                    />
                </>
            )}

            {selectedNavItem === 'comment' && (
                <>
                    <NotificationPageMainInteraction
                        ProfileImage='https://i1.sndcdn.com/avatars-lIjHNeHZwk2i4wmx-RbFNcw-t500x500.jpg'
                        FullName='Manlier Man'
                        DateTime='2023-10-10'
                        ReactedPost='10 things I do before sleeping'
                    />

                    <NotificationPageMainComment
                        ProfileImage='https://i1.sndcdn.com/avatars-lIjHNeHZwk2i4wmx-RbFNcw-t500x500.jpg'
                        FullName='Manlier Man'
                        DateTime='2023-10-16'
                        CommentedPost='10 things I must have at all time'
                        CommentContent='Thanks for the post kind sir'
                    />
                </>
            )}

        </div>

    );
};

export default NotificationPageMain;
