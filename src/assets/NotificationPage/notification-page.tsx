import React from 'react';
import './notification-page.css';
import { NotificationPageProvider } from './notification-page-context';
import NotificationPageTop from './NofiticationPageTop/notification-page-top';
import NotificationPageSide from './NotificationPageSide/notification-page-side';
import NotificationPageMain from './NotificationPageMain/notification-page-main';

const NotificationPage: React.FC = () => {

    return (
        <div className='notification-page-container'>

            <NotificationPageTop />

            <div className='notification-page-body'>
                <NotificationPageProvider>
                    <NotificationPageSide />
                    <NotificationPageMain />
                </NotificationPageProvider>
            </div>
        </div>
    );
};

export default NotificationPage;
