import React from 'react';
import './search-page-top.css';

type SearchPageTopProp = {
    SearchedTerm: string;
}

const SearchPageTop: React.FC<SearchPageTopProp> = ({ SearchedTerm }) => {

    return (
        <header className='search-page-header'>

            <h2>Search result for</h2>
            <h1>{SearchedTerm}</h1>

        </header>

    );
};

export default SearchPageTop;
