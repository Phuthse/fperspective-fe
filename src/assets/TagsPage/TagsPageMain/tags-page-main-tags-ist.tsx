import React, { useEffect, useState } from 'react';
import TagsPageTags from './tags-page-tags';
import Tag from '../../../model/tag';
import { tagApi } from '../../../config/axios';

type TagsPageMain = {
    uri: string;
}

const TagsPageTagsList: React.FC<TagsPageMain> = ({ uri }) => {


    const [tags, setTags] = useState<Tag[]>();
    const fetchUserData = async () => {
        const response = await tagApi.get(uri, { withCredentials: true });

        setTags(response.data);
        console.log(response.data);
    };
    useEffect(() => {
        fetchUserData();
    }, [tagApi]);

    return (

        <div className='tags-page-body'>
            <div className='tags-page-container'>
                {tags?.map((tag) => {
                    return (
                        <TagsPageTags
                            tags={tag}
                        />
                    )
                })}
            </div>
        </div>
    );
};
export default TagsPageTagsList;
