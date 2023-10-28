import React from 'react';
import './recent-post.css';
import BlogTitle from '../../../home/blog/BlogTitle/blog-title';
import UpAndDownVoteButtonHorizontal from '../../../home/button/ReactionButton/up-down-vote-button-horizontal';
import CommentButton from '../../../home/button/CommentButton/comment-button';
import { Link } from 'react-router-dom';

// Make these attribute into arrays
type RecentPostProps = {
    blogTitle: string;
    upvote: number;
    numberOfComment: number;
}


const RecentPost: React.FC<RecentPostProps> = ({
    blogTitle,
    upvote,
    numberOfComment
}) => {

    return (
        <div className="post-container">

            <div className="recent-post-content">

                <BlogTitle title={blogTitle} />

                <div className="post-details">

                    <div className='post-interact'>
                        <UpAndDownVoteButtonHorizontal upvote={upvote} />
                        <CommentButton NumberOfComment={numberOfComment} />
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
