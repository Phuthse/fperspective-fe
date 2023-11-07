import React from 'react';
import './tags-page-tags-admin.css';
import Tag from '../../../model/tag';

type TagsPageAdminProp = {
    tags: Tag;
}

const TagPageTagsAdmin: React.FC<TagsPageAdminProp> = ({ tags }) => {

    return (
        <div className="admin-tag-page-content">
            <div className='admin-tag-name-num'>
                <h3>
                    <span>#</span>
                    <input
                        value={tags.tagName}
                    />
                </h3>
                <h4>10k posts</h4>
            </div>
            <div className="admin-tag-button">
                <button className='admin-tag-update'>Update</button>
                <button className='admin-tag-delete'>Delete</button>
            </div>
        </div>
    );
};

export default TagPageTagsAdmin;
