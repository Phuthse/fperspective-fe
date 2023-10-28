import React from 'react';
import './tags-page-header.css';

type TagsPageHeaderProp = {
    NumberOfTags : number;
}


const TagsPageHeader: React.FC<TagsPageHeaderProp> = ({NumberOfTags}) => {
    return (

        <header className='tags-page-header'>
            <h1>All Tags ({NumberOfTags})</h1>
        </header>
    );
};
export default TagsPageHeader;
