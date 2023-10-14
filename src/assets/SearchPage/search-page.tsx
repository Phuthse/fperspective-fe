import React from 'react';
import './search-page.css';
import { SearchPageProvider } from './search-page-context';
import SearchPageTop from './SearchPageTop/search-page-top';
import SearchPageSide from './SearchPageSide/search-page-side';
import SearchPageMain from './SearchPageMain/search-page-main';


const SearchPage: React.FC = () => {

    return (
        <div className='search-page-container'>

            <SearchPageTop SearchedTerm='Css' />

            <div className='search-page-body'>
                <SearchPageProvider>
                    <SearchPageSide />
                    <SearchPageMain />
                </SearchPageProvider>
            </div>
        </div>
    );
};

export default SearchPage;
