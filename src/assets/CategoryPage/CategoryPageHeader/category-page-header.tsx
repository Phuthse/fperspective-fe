import React, { useEffect, useState } from 'react';
import './category-page-header.css';
import { categoryApi } from '../../../config/axios';
import Category from '../../../model/category';

type CategoryPageHeaderProp = {
    uri: string;
}

const CategoryPageHeader: React.FC<CategoryPageHeaderProp> = ({ uri }) => {

    const [category, setCategory] = useState<Category[]>();
    const fetchUserData = async () => {
        const response = await categoryApi.get(uri, { withCredentials: true });

        setCategory(response.data);
        console.log(response.data);
    };
    useEffect(() => {
        fetchUserData();
    }, [categoryApi]);

    const categoryCount = category ? category.filter(category => category.status === true).length : 0;

    return (
        <header className='category-page-header'>
            <h1>All Category ({categoryCount})</h1>
        </header>
    );
};
export default CategoryPageHeader;
