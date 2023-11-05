import React, { useEffect, useState } from 'react';
import './detailed-blog-post.css';
import DetailedBlogPost from './detailed-blog-post';
import Blog from '../../../model/blog';
import { blogApi } from '../../../config/axios';

type DetailedBlogPostGeneratorProps = {
    blogUri: string;
}

const DetailedBlogPostGenerator: React.FC<DetailedBlogPostGeneratorProps> = ({ blogUri }) => {

    const initialBlog: Blog = {
        blogId: "1",
        blogTitle: "Example Blog",
        blogContent: "This is an example blog content.",
        userId: "user1",
        btag: [
            { tagId: "tag1", tagName: "Tag1", status: false },
            { tagId: "tag2", tagName: "Tag2", status: false },
        ],
        like: [],
        commentId: [],
        uploadDate: Date.now(), // You can set the current timestamp or any specific date
        status: true, // You can set it to true or false as needed
    };

    const [blog, setBlog] = useState<Blog>(initialBlog);
    const fetchBlogData = async () => {
        const response = await blogApi.get(blogUri, { withCredentials: true });
        setBlog(response.data);
    };
    useEffect(() => {
        fetchBlogData();
    }, [blogUri]);

    const USER_ID = blog.userId;
    const USER_URI = '/show/' + USER_ID;

    return (

        <DetailedBlogPost
            detailBlog={blog}
            userUri={USER_URI}
        />

    );
};

export default DetailedBlogPostGenerator;
