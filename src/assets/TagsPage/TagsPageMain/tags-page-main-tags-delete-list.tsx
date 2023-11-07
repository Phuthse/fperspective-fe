import React, { useEffect, useState } from 'react';
import Tag from '../../../model/tag';
import { tagApi } from '../../../config/axios';
import TagPageDeletedTags from './tags-page-disable-tags';

type TagsPageMain = {
    uri: string;
}

const TagsPageDeletedTagsList: React.FC<TagsPageMain> = ({ uri }) => {
    const [tags, setTags] = useState<Tag[]>([]);

    const fetchUserData = async () => {
        const response = await tagApi.get(uri, { withCredentials: true });
        setTags(response.data);
        console.log(response.data);
    };

    useEffect(() => {
        fetchUserData();
    }, [tagApi]);

    const disabledTags = tags.filter(tag => tag.status === false);
    const disabledTagCount = disabledTags.length;

    return (
        <>
            <h1 className='tag-page-disable-tag-header'>All Disabled Tags ({disabledTagCount})</h1>
            <div className='tags-page-body'>
                <div className='tags-page-container'>
                    {disabledTags.map(tag => (
                        <TagPageDeletedTags tags={tag} key={tag.tagId} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default TagsPageDeletedTagsList;
