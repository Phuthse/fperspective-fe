import React from 'react';
import './tags-page-disable-tags.css';
import Tag from '../../../model/tag';
import { tagApi } from '../../../config/axios';

type TagsPageAdminProp = {
    tags: Tag;
}

const TagPageDeletedTags: React.FC<TagsPageAdminProp> = ({ tags }) => {

    /* TAG ENABLE METHODS */

    const HandleEnable = () => {
        tagApi
            .delete(`/enable/${tags.tagId}`, { withCredentials: true })
            .then((response) => {
                window.location.href = "http://localhost:5173/tag-page";
                console.log("tag enabled:", response.data);
            })
            .catch((error) => {
                console.error("Error enabling tag: ", error);
            });
    };

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
            <button className='admin-deleted-tag-enable' onClick={HandleEnable}>Enable</button>
        </div>
    );
};

export default TagPageDeletedTags;
