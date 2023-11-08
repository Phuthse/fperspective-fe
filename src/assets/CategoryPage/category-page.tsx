import React, { useEffect, useState } from 'react';
import './category-page.css';
import CategoryPageHeader from './CategoryPageHeader/category-page-header';
import CategoryPageCategoryList from './CategoryPageMain/category-page-item-list';
import CategoryPageDeletedList from './CategoryPageMain/category-page-item-delete-list';
import { loginApi } from '../../config/axios';
import User from '../../model/user';

const CategoryPage: React.FC = () => {

    const [loginUser, setLoginUser] = useState<User>();
    const fetchLoginData = async () => {
        const response = await loginApi.get('/currentUser', { withCredentials: true });
        setLoginUser(response.data);
    };
    useEffect(() => {
        fetchLoginData();
    }, [loginApi]);


    return (
        <div className='category-page-top'>
            <CategoryPageHeader uri='/show' />
            <CategoryPageCategoryList uri="/show" />
            {loginUser?.role === "ROLE_USER" && (
                <CategoryPageDeletedList uri='/show' />
            )}
        </div>
    );
};

export default CategoryPage;
