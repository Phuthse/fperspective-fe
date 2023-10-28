import React from 'react';
import './notification-page-side.css';
import { useNotificationPage } from '../notification-page-context';


const NotificationPageSide: React.FC = () => {

    const { selectedNavItem, setSelectedNavItem } = useNotificationPage();

    return (
        <div className="notification-page-side">
            <ul>
                <li>
                    <a
                        className={`notification-page-side-option ${selectedNavItem === 'all' ? 'active' : ''}`}
                        onClick={() => setSelectedNavItem('all')}
                    >
                        All
                    </a>
                </li>
                <li>
                    <a
                        className={`notification-page-side-option ${selectedNavItem === 'post' ? 'active' : ''}`}
                        onClick={() => setSelectedNavItem('post')}
                    >
                        Posts
                    </a>
                </li>
                <li>
                    <a
                        className={`notification-page-side-option ${selectedNavItem === 'comment' ? 'active' : ''}`}
                        onClick={() => setSelectedNavItem('comment')}
                    >
                        Interaction
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default NotificationPageSide;
