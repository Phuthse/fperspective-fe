import React, { useEffect, useState } from 'react';
import TagsPageTags from './tags-page-tags';
import Tag from '../../../model/tag';
import { loginApi, tagApi } from '../../../config/axios';
import User from '../../../model/user';
import TagPageTagsAdmin from './tags-page-tags-admin';

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

    const [loginUser, setLoginUser] = useState<User>();
    const fetchLoginData = async () => {
        const response = await loginApi.get('/currentUser', { withCredentials: true });
        setLoginUser(response.data);
    };
    useEffect(() => {
        fetchLoginData();
    }, [loginApi]);


    if (loginUser?.role === 'ROLE_ADMIN') {
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
    }
    else {
        return (
            <div className='tags-page-body'>
                <div className='tags-page-container'>
                    {tags?.map((tag) => {
                        return (
                            <TagPageTagsAdmin
                                tags={tag}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }


};
export default TagsPageTagsList;
