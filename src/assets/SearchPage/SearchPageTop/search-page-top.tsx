import React from 'react';
import './search-page-top.css';

type SearchPageTopProp = {
    SearchedTerm: string;
}

const SearchPageTop: React.FC<SearchPageTopProp> = ({ SearchedTerm }) => {

    return (
        <header className='search-page-header'>
            <h2>Search result for <span>{SearchedTerm}</span></h2>
        </header>

    );
};

export default SearchPageTop;
