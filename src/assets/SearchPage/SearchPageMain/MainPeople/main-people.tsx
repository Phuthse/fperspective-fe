import React from 'react';
import './main-people.css';
import FollowButton from '../../../home/button/FollowButton/follow-button';


type SearchPageMainPeopleProp = {
    ProfileImage: string;
    FullName: string;
    Bio: string;
}

const SearchPageMainPeople: React.FC<SearchPageMainPeopleProp> =
    ({
        ProfileImage,
        FullName,
        Bio
    }) => {

        return (

            <div className='search-page-main-people-container'>
                <div className='search-page-main-people'>
                    <a href='#'>
                        <img src={ProfileImage} />
                    </a>
                    <div className="search-page-main-people-detail">
                        <h2>
                            <a href='#'>
                                {FullName}
                            </a>
                        </h2>
                        <p>{Bio}</p>
                    </div>
                </div>
                <FollowButton />

            </div>
        );
    };

export default SearchPageMainPeople;
