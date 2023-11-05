import React from 'react';
import './home-page.css'
import BlogList from './blog-list';


const BlogListTopWeek: React.FC = () => {

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const week = Math.ceil(day / 7);

    return (

        <BlogList uri={`/sort/week/${year}/${month}/${week}`} />

    );
};

export default BlogListTopWeek;
