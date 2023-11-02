import React from 'react';
import './tags-page-tags.css';
import FollowButton from '../../home/button/FollowButton/follow-button';
import Tag from '../../../model/tag';

type TagsPageMain = {
    tags: Tag;
}

const TagsPageTags: React.FC<TagsPageMain> = ({ tags }) => {
    return (

        <div className="tags-page-content">

            <div className='tags-name-num'>
                <h3>
                    <a href='#'>#{tags.tagName}</a>
                </h3>
                <h4>
                    10k posts
                </h4>
            </div>
            <FollowButton />

        </div>

    );
};
export default TagsPageTags;
