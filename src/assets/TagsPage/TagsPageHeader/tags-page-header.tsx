import React, { useEffect, useState } from 'react';
import './tags-page-header.css';
import { tagApi } from '../../../config/axios';
import Tag from '../../../model/tag';

type TagsPageHeaderProp = {
    uri: string;
}


const TagsPageHeader: React.FC<TagsPageHeaderProp> = ({ uri }) => {

    const [tags, setTags] = useState<Tag[]>();
    const fetchUserData = async () => {
        const response = await tagApi.get(uri, { withCredentials: true });

        setTags(response.data);
        console.log(response.data);
    };
    useEffect(() => {
        fetchUserData();
    }, [tagApi]);

    const tagCount = tags ? tags.length : 0;

    return (
        <header className='tags-page-header'>
            <h1>All Tags ({tagCount})</h1>
        </header>
    );
};
export default TagsPageHeader;
