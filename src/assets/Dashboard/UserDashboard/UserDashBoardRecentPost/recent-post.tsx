import React from 'react';
import './recent-post.css';
import BlogTitle from '../../../home/blog/BlogTitle/blog-title';
import { Link } from 'react-router-dom';
import Blog from '../../../../model/blog';
import { blogApi } from '../../../../config/axios';
import HeartButton from '../../../home/button/ReactionButton/heart-button';

// Make these attribute into arrays
type RecentPostProps = {
    blog: Blog;
}

const RecentPost: React.FC<RecentPostProps> = ({
    blog,
}) => {

    const handleDelete = () => {
        blogApi
            .delete(`/delete/${blog.blogId}`, { withCredentials: true })
            .then((response) => {
                window.location.reload();
                console.log("blog deleted:", response.data);
            })
            .catch((error) => {
                console.error("Error deleting blog: ", error);
            });
    };

    return (
        <div className="post-container">
            <div className="recent-post-content">
                <BlogTitle blogProp={blog} />
                <div className="post-details">
                    <div className='post-interact'>
                        <HeartButton currentBlog={blog} />
                    </div>
                </div>
            </div>
            <div className="recent-post-action">
                <Link to={`/edit-blog/${blog.blogId}`}>
                    Edit
                </Link>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default RecentPost;
