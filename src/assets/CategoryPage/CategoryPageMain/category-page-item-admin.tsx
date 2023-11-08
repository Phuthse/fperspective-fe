import React, { useEffect, useState } from 'react';
import './category-page-item-admin.css';
import Category from '../../../model/category';
import { categoryApi } from '../../../config/axios';

type CategoryPageAdminProp = {
    category: Category;
}

const CategoryPageAdmin: React.FC<CategoryPageAdminProp> = ({ category }) => {

    /* CATEGORY UPDATE AND DELETE METHODS */

    const [categoryName, setCategoryName] = useState(category.categoryName);
    //const [status] = useState(category.status);
    const [count, setCount] = useState<number>(1);

    const fetchCategoryData = async () => {
        const response = await categoryApi.get(`/count/${category.categoryName}`, { withCredentials: true });
        setCount(response.data);
    };
    useEffect(() => {
        fetchCategoryData();
    }, [categoryApi]);

    // const handleUpdate = () => {
    //     const categoryData = {
    //         categoryId: category.categoryId,
    //         categoryName: categoryName,
    //         status
    //     };
    //     categoryApi
    //         .post(`/update`, categoryData, { withCredentials: true })
    //         .then((response) => {
    //             console.log(categoryData);
    //             window.location.href = "http://localhost:5173/category-page";
    //             console.log("CATEGORY updated:", response.data);
    //         })
    //         .catch((error) => {
    //             console.log(categoryData);
    //             console.error("Error updating category: ", error);
    //         });
    // };

    const handleDelete = () => {
        categoryApi
            .delete(`/delete/${category.categoryId}`, { withCredentials: true })
            .then((response) => {
                window.location.href = "http://localhost:5173/category-page";
                console.log("CATEGORY updated:", response.data);
            })
            .catch((error) => {
                console.error("Error deleting category: ", error);
            });
    };


    const handleCategoryNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategoryName(event.target.value);
    };

    return (
        <div className="admin-category-page-content">
            <div className='admin-category-name-num'>
                <h3>
                    <span>#</span>
                    <input
                        key={category.categoryId}
                        onChange={handleCategoryNameChange}
                        value={categoryName}
                    />
                </h3>
                <h4>{count} posts</h4>
            </div>
            <div className="admin-category-button">
                {/* <button className='admin-category-update' onClick={handleUpdate}>Update</button> */}
                <button className='admin-category-delete' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default CategoryPageAdmin;
