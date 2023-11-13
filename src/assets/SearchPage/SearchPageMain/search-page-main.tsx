import React, { useState } from 'react';
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

    const [sortBy, setSortBy] = useState('latest'); // default sorting

    const handleSortChange = (value: string) => {
        setSortBy(value);
    };

    const renderBlogList = () => {
        switch (sortBy) {
            case 'latest':
                return <BlogList uri={`/search/text/${search}/-1`} />;
            case 'popular':
                return <BlogList uri={`/sort/text/${search}`} />;
            case 'oldest':
                return <BlogList uri={`/search/text/${search}/1`} />;
            default:
                return <BlogList uri={`/search/text/${search}/-1`} />;
        }
    };

    return (

        <div className="search-page-main-container">
            {selectedNavItem === 'post' && (
                <>
                    <div className="search-page-post-filter">
                        <button onClick={() => handleSortChange('latest')}>Latest</button>
                        <button onClick={() => handleSortChange('popular')}>Most Popular</button>
                        <button onClick={() => handleSortChange('oldest')}>Oldest</button>
                    </div>
                    {renderBlogList()}
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
