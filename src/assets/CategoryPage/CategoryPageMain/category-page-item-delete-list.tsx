import React, { useEffect, useState } from 'react';
import Category from '../../../model/category';
import { categoryApi } from '../../../config/axios';
import CategoryPageDeletedCategory from './category-page-disable-item';

type CategoryPageMain = {
    uri: string;
}

const CategoryPageDeletedList: React.FC<CategoryPageMain> = ({ uri }) => {
    const [category, setCategory] = useState<Category[]>([]);
    const fetchCategoryData = async () => {
        const response = await categoryApi.get(uri, { withCredentials: true });
        setCategory(response.data);
        console.log(response.data);
    };

    useEffect(() => {
        fetchCategoryData();
    }, [categoryApi]);

    const disabledCategory = category.filter(category => category.status === false);
    const disabledCategoryCount = disabledCategory.length;

    return (
        <>
            <h1 className='category-page-disable-item-header'>All Disabled Categorys ({disabledCategoryCount})</h1>
            <div className='category-page-body'>
                <div className='category-page-container'>
                    {disabledCategory.map(category => (
                        <CategoryPageDeletedCategory category={category} key={category.categoryId} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default CategoryPageDeletedList;
