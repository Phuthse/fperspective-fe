import React from 'react';
import './notification-page.css';
import { SearchPageProvider } from '../SearchPage/search-page-context';
import SearchPageTop from '../SearchPage/SearchPageTop/search-page-top';
import SearchPageSide from '../SearchPage/SearchPageSide/search-page-side';
import SearchPageMain from '../SearchPage/SearchPageMain/search-page-main';


const NotificationPage: React.FC = () => {

    return (
        <div className='search-page-container'>

            <header className='notification-page-header'>

                <h1>Notification</h1>

            </header>

            <div className='search-page-body'>
                <SearchPageProvider>
                    <SearchPageSide />
                    <SearchPageMain />
                </SearchPageProvider>
            </div>
        </div>
    );
};

export default NotificationPage;
