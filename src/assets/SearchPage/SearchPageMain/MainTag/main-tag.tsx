import React from 'react';
import './main-tag.css';


type SearchPageMainTagProp = {
    TagName: string;
    TagDesc: string;
}

const SearchPageMainTag: React.FC<SearchPageMainTagProp> =
    ({
        TagName,
        TagDesc
    }) => {

        return (

            <div className='search-page-main-tag'>
                <span>
                    #
                </span>
                <div className="search-page-main-tag-detail">

                    <h2>
                        <a href='#'>
                            {TagName}
                        </a>
                    </h2>
                    <p>{TagDesc}</p>

                </div>
            </div>
        );
    };

export default SearchPageMainTag;
