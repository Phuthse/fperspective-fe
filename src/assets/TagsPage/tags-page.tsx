import React, { useEffect, useState } from 'react';
import './tags-page.css';
import TagsPageHeader from './TagsPageHeader/tags-page-header';
import TagsPageTagsList from './TagsPageMain/tags-page-main-tags-list';
import TagsPageDeletedTagsList from './TagsPageMain/tags-page-main-tags-delete-list';
import { loginApi } from '../../config/axios';
import User from '../../model/user';

const TagsPage: React.FC = () => {

    const [loginUser, setLoginUser] = useState<User>();
    const fetchLoginData = async () => {
        const response = await loginApi.get('/currentUser', { withCredentials: true });
        setLoginUser(response.data);
    };
    useEffect(() => {
        fetchLoginData();
    }, [loginApi]);


    return (
        <div className='tags-page-top'>
            <TagsPageHeader uri='/show' />
            <TagsPageTagsList uri="/show" />
            {loginUser?.role === "ROLE_ADMIN" && (
                <TagsPageDeletedTagsList uri='/show' />
            )}
        </div>
    );
};

export default TagsPage;
