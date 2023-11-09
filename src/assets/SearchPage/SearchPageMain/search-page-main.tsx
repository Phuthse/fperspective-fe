import React from 'react';
import './search-page-main.css';
import { useSearchPage } from '../search-page-context';
import BlogList from '../../home/blog/BlogPost/blog-list';
import { useParams } from 'react-router';
import MainPeopleList from './MainPeople/main-people-list';
import MainTagList from './MainTag/main-tag-list';
import MainSubjectList from './MainSubject/main-subject-list';

const SearchPageMain: React.FC = () => {

    const { selectedNavItem } = useSearchPage();

    const { searchText } = useParams();

    const search = searchText as string;

    return (

        <div className="search-page-main-container">
            {selectedNavItem === 'post' && (
                <>
                    <div className="search-page-post-filter">
                        <a href='#'>Latest</a>
                        <a href='#'>Most Popular</a>
                        <a href='#'>Oldest</a>
                    </div>
                    <BlogList uri={`/search/text/${search}/-1`} />
                </>
            )}

            {selectedNavItem === 'tag' && (
                <>
                    <MainTagList uri={`/search/text/${search}`} />
                </>
            )}

            {selectedNavItem === 'subject' && (
                <>
                    <MainSubjectList uri={`/search/text/${search}`} />
                </>
            )}

            {selectedNavItem === 'people' && (
                <>
                    <MainPeopleList uri={`/search/${search}`} />
                </>
            )}

        </div>

    );
};

export default SearchPageMain;
