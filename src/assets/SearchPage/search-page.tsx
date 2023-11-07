import React from 'react';
import './search-page.css';
import { SearchPageProvider } from './search-page-context';
import SearchPageTop from './SearchPageTop/search-page-top';
import SearchPageSide from './SearchPageSide/search-page-side';
import SearchPageMain from './SearchPageMain/search-page-main';
import { useParams } from 'react-router';


const SearchPage: React.FC = () => {

    const {searchText} = useParams();

    const search = searchText as string;

    return (
        <div className='search-page-container'>

            <SearchPageTop SearchedTerm={search} />

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
