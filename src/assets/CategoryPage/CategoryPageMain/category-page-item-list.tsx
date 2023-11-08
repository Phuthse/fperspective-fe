import React, { useEffect, useState } from 'react';
import CategoryPageCategory from './category-page-item';
import Category from '../../../model/category';
import { loginApi, categoryApi } from '../../../config/axios';
import User from '../../../model/user';
import CategoryPageAdmin from './category-page-item-admin';

type CategoryPageMain = {
    uri: string;
}

const CategoryPageCategoryList: React.FC<CategoryPageMain> = ({ uri }) => {

    const [category, setCategory] = useState<Category[]>([]);
    const fetchUserData = async () => {
        const response = await categoryApi.get(uri, { withCredentials: true });

        setCategory(response.data);
        console.log(response.data);
    };
    useEffect(() => {
        fetchUserData();
    }, [categoryApi]);

    const [loginUser, setLoginUser] = useState<User>();
    const fetchLoginData = async () => {
        const response = await loginApi.get('/currentUser', { withCredentials: true });
        setLoginUser(response.data);
    };
    useEffect(() => {
        fetchLoginData();
    }, [loginApi]);

    /* CATEGORY CREATION METHODS */

    const [categoryName, setCategoryName] = useState("");
    const [status] = useState(true);

    const handleCreate = () => {
        // Create a data object to send to the backend
        const categoryData = {
            categoryName,
            status
        };

        // Send a POST request to your backend
        categoryApi
            .post(`/show`, categoryData, { withCredentials: true })
            .then((response) => {
                console.log(categoryData);
                window.location.href = "http://localhost:5173";
                console.log("CATEGORY created:", response.data);
            })
            .catch((error) => {
                console.log(categoryData);
                console.error("Error creating category: ", error);
            });
    };

    const handleCategoryNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategoryName(event.target.value);
    };


    if (loginUser?.role === 'ROLE_ADMIN') {
        return (
            <div className='category-page-body'>
                <div className='category-page-container'>
                    {category
                        .filter(category => category.status === true) // Filter category with status true
                        .map(category => (
                            <CategoryPageCategory category={category} key={category.categoryId} />
                        ))}
                </div>
            </div>
        );
    } else {
        return (
            <>
                <div className='category-page-body'>
                    <div className='category-page-container'>
                        {category
                            .filter(category => category.status === true) // Filter category with status true
                            .map(category => (
                                <CategoryPageAdmin category={category} key={category.categoryId} />
                            ))
                        }
                        <form className="create-category-form">
                            <input
                                placeholder="Enter category name"
                                value={categoryName}
                                onChange={handleCategoryNameChange}
                            />
                            <div className="create-category-form-footer">
                                <button
                                    className='create-category-button'
                                    onClick={handleCreate}
                                >
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }



};
export default CategoryPageCategoryList;
