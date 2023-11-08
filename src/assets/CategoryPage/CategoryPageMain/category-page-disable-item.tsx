import React from 'react';
import './category-page-disable-item.css';
import Category from '../../../model/category';

type CategoryPageAdminProp = {
    category: Category;
}

const CategoryPageDeletedCategory: React.FC<CategoryPageAdminProp> = ({ category }) => {

    /* CATEGORY UPDATE AND DELETE METHODS */

    return (
        <div className="admin-deleted-category-page-content">
            <div className='admin-deleted-category-name-num'>
                <h3>
                    <span key={category.categoryId}>
                        {category.categoryName}
                    </span>
                </h3>
            </div>
            <button className='admin-deleted-category-enable'>Enable</button>
        </div>
    );
};

export default CategoryPageDeletedCategory;
