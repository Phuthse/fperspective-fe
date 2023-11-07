import React from 'react';
import './search-page-main.css';
import { useSearchPage } from '../search-page-context';
import SearchPageMainPost from './MainPost/main-post';
import SearchPageMainTag from './MainTag/main-tag';
import SearchPageMainPeople from './MainPeople/main-people';


type SearchPageMainProps = {
    // uri: string
}

const SearchPageMain: React.FC<SearchPageMainProps> = () => {

    const { selectedNavItem } = useSearchPage();



    return (

        <div className="search-page-main-container">

            {selectedNavItem === 'post' && (
                <>
                    <SearchPageMainPost
                        ProfileImage='https://i.ytimg.com/vi/pxcmKupu-Sw/maxresdefault.jpg'
                        FullName='Gaben Newell'
                        DatePosted='Oct 2 2023'
                        Title="Listen here you little shit, I'll have you know..."
                    />

                    <SearchPageMainPost
                        ProfileImage='https://sugargamers.com/wp-content/uploads/2022/11/Screenshot-2022-11-04-at-08.52.02.png'
                        FullName='Man of God'
                        DatePosted='Oct 4 2023'
                        Title="I graduated top of my class in the navy seal..."
                    />
                </>
            )}

            {selectedNavItem === 'tag' && (
                <>
                    <SearchPageMainTag
                        TagName='python'
                        TagDesc='Nonvenomous constrictor, stealthy, scales, ambush predator, mainly found in tropics. Wait!'
                    />
                    <SearchPageMainTag
                        TagName='C++'
                        TagDesc="It's the better version of C+"
                    />
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
