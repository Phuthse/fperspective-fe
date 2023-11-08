import React from 'react';
import './category-page-item.css';
import FollowButton from '../../home/button/FollowButton/follow-button';
import Category from '../../../model/category';

type CategoryPageMain = {
    category: Category;
}

const CategoryPageCategory: React.FC<CategoryPageMain> = ({ category }) => {
    return (

        <div className="category-page-content">

            <div className='category-name-num'>
                <h3>
                    <a href='#'>#{category.categoryName}</a>
                </h3>
                <h4>
                    10k posts
                </h4>
            </div>
            <FollowButton />

        </div>

    );
};
export default CategoryPageCategory;
