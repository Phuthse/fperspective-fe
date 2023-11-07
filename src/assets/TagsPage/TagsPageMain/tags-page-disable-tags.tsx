import React from 'react';
import './tags-page-disable-tags.css';
import Tag from '../../../model/tag';

type TagsPageAdminProp = {
    tags: Tag;
}

const TagPageDeletedTags: React.FC<TagsPageAdminProp> = ({ tags }) => {

    /* TAG UPDATE AND DELETE METHODS */

    return (
        <div className="admin-deleted-tag-page-content">
            <div className='admin-deleted-tag-name-num'>
                <h3>
                    <span>#</span>
                    <span key={tags.tagId}>
                        {tags.tagName}
                    </span>
                </h3>
            </div>
            <button className='admin-deleted-tag-enable'>Enable</button>
        </div>
    );
};

export default TagPageDeletedTags;
