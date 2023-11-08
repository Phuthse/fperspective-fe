import React from 'react';
import './blog-category.css';
import Category from '../../../../model/category';
import { Link } from 'react-router-dom';

type BlogCategoryProps = {
    category?: Category;
}

const getMajor = (majorName: string) => {
    const MajorMap: Record<string, number> = {
        /* IT MAJOR */
        'Artificial Intelligence': 1,
        'Software Engineering': 1,
        'Digital Art Design': 1,
        'Information System': 1,
        'Information Assurance': 1,
        /* BA MAJOR */
        'Finance': 2,
        'Hotel Management': 2,
        'International Business': 2,
        'Multimedia Communications': 2,
        'Marketing': 2,
        /* LANGUAGE MAJOR */
        'English - Chinese Studies': 3,
        'English Studies': 3,
        'Korean Studies': 4,
        'Japanese Studies': 5,  // Corrected typo in 'Japanese Studies'
    };

    return MajorMap[majorName] || 1;
};

const BlogCategory: React.FC<BlogCategoryProps> = ({ category }) => {
    // Check if category.status is true before rendering
    if (category?.status) {
        const Major = getMajor(category.categoryName);
        const MajorColors = [
            '#007acc',
            'orange',
            '#006600',
            '#ffcc00',
            '#990066',
        ];

        const MajorColor = MajorColors[Major - 1];

        return (
            <>
                <Link
                    to={`/category/${category.categoryName}`}
                    key={category.categoryName}
                    className="home-page-category"
                    style={{ color: MajorColor }}
                >
                    {category.categoryName}
                </Link>
            </>
        );
    } else {
        return null;
    }
};

export default BlogCategory;
