import React, { useEffect, useState } from 'react';
import './tags-page-tags.css';
import FollowButton from '../../home/button/FollowButton/follow-button';
import Tag from '../../../model/tag';
import { tagApi } from '../../../config/axios';

type TagsPageMain = {
    tags: Tag;
}

const TagsPageTags: React.FC<TagsPageMain> = ({ tags }) => {

    const [count, setCount] = useState<number>(1);
    const fetchTagData = async () => {
        const response = await tagApi.get(`/count/${tags.tagName}`, { withCredentials: true });
        setCount(response.data);
    };
    useEffect(() => {
        fetchTagData();
    }, [tagApi]);

    return (

        <div className="tags-page-content">

            <div className='tags-name-num'>
                <h3>
                    <a href='#'>#{tags.tagName}</a>
                </h3>
                <h4>
                    {count} posts
                </h4>
            </div>
            <FollowButton />

        </div>

    );
};
export default TagsPageTags;
