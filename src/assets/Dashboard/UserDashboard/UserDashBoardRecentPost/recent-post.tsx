import React from 'react';
import './recent-post.css';
import BlogTitle from '../../../home/blog/BlogTitle/blog-title';
import UpAndDownVoteButtonHorizontal from '../../../home/button/ReactionButton/up-down-vote-button-horizontal';
import CommentButton from '../../../home/button/CommentButton/comment-button';
import { Link } from 'react-router-dom';
import Blog from '../../../../model/blog';

// Make these attribute into arrays
type RecentPostProps = {
    blog: Blog;
}

const RecentPost: React.FC<RecentPostProps> = ({
    blog,
}) => {

    return (
        <div className="post-container">

            <div className="recent-post-content">

                <BlogTitle blogProp={blog} />

                <div className="post-details">

                    <div className='post-interact'>
                        <UpAndDownVoteButtonHorizontal upvote={blog.like.length} />
                        <CommentButton NumberOfComment={blog.commentId.length} />
                    </div>

                </div>
            </div>

            <div className="recent-post-action">
                <a href='#'>
                    Manage
                </a>
                <Link to='/create-blog'>
                    Edit
                </Link>
            </div>

        </div>
    );
};

export default RecentPost;
