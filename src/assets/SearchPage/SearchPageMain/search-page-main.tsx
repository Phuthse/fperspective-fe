import React from 'react';
import './search-page-main.css';
import { useSearchPage } from '../search-page-context';
import BlogList from '../../home/blog/BlogPost/blog-list';
import { useParams } from 'react-router';
import MainPeopleList from './MainPeople/main-people-list';
import MainTagList from './MainTag/main-tag-list';


type SearchPageMainProps = {
    // uri: string
}

const SearchPageMain: React.FC<SearchPageMainProps> = () => {

    const { selectedNavItem } = useSearchPage();

    const { searchText } = useParams();

    const search = searchText as string;

    return (

        <div className="search-page-main-container">

            {selectedNavItem === 'post' && (
                <>
                    <BlogList uri={`/search/text/${search}/-1`}/>
                </>
            )}

            {selectedNavItem === 'tag' && (
                <>
                    <MainTagList uri={`/search/text/${search}`} />
                </>
            )}

            {selectedNavItem === 'people' && (
                <>
                    <MainPeopleList uri={`/search/${search}`}/>
                </>
            )}

        </div>

    );
};

export default SearchPageMain;
