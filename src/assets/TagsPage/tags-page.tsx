import React from 'react';
import './tags-page.css';
import TagsPageHeader from './TagsPageHeader/tags-page-header';
import TagsPageTagsList from './TagsPageMain/tags-page-main-tags-list';

const TagsPage: React.FC = () => {

    return (
        <div className='tags-page-top'>
            <TagsPageHeader uri='/show' />
            <TagsPageTagsList uri="/show" />
        </div>
    );
};

export default TagsPage;
