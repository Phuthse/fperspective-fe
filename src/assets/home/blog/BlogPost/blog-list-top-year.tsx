import React from 'react';
import BlogList from './blog-list';


const BlogListTopYear: React.FC = () => {

    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <BlogList uri={`/sort/year/${year}`} />
    );
};

export default BlogListTopYear;
