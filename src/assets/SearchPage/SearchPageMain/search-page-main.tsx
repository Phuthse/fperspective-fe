import React from 'react';
import './search-page-main.css';
import { useSearchPage } from '../search-page-context';
import SearchPageMainPeople from './MainPeople/main-people';
import BlogList from '../../home/blog/BlogPost/blog-list';
import { useParams } from 'react-router';
import TagList from '../../home/blog/TagList/tag-list';

const SearchPageMain: React.FC = () => {

    const { selectedNavItem } = useSearchPage();

    const { searchText } = useParams();

    const search = searchText as string;

    return (

        <div className="search-page-main-container">

            {selectedNavItem === 'post' && (
                <>
                    <BlogList uri={`/search/text/${search}/-1`} />
                </>
            )}

            {selectedNavItem === 'tag' && (
                <>
                    <TagList uri={`/search/text/${search}`} />
                </>
            )}

            {selectedNavItem === 'people' && (
                <>
                    <SearchPageMainPeople
                        ProfileImage='https://i.ytimg.com/vi/pxcmKupu-Sw/maxresdefault.jpg'
                        FullName='Bob Man'
                        Bio='My name is bob and I do bob related stuff and activities'
                    />
                    <SearchPageMainPeople
                        ProfileImage='https://sugargamers.com/wp-content/uploads/2022/11/Screenshot-2022-11-04-at-08.52.02.png'
                        FullName='Cool Man'
                        Bio='I am extremly cool, like, cooler than you putrid mind can ever imagine, your tiny puny mind can never comprehend the amount of cool that I have'
                    />
                </>
            )}

        </div>

    );
};

export default SearchPageMain;
