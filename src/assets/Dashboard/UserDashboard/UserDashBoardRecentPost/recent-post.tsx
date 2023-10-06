import React from 'react';
import './recent-post.css';
import BlogTitle from '../../../home/blog/BlogTitle/blog-title';
import BlogTags from '../../../home/blog/BlogTags/blog-tags';
import UpAndDownVoteButtonHorizontal from '../../../home/button/ReactionButton/up-down-vote-button-horizontal';
import CommentButton from '../../../home/button/CommentButton/comment-button';

// Make these attribute into arrays
type RecentPostProps = {
    blogTitle: string;
    blogTags: string[];
    upvote: number;
    numberOfComment: number;
}


const RecentPost: React.FC<RecentPostProps> = ({
    blogTitle,
    blogTags,
    upvote,
    numberOfComment
}) => {

    return (
        <div className="post-container">

            <BlogTitle title={blogTitle} />

            <BlogTags tags={blogTags} />

            <div className="post-details">

                <div className='post-interact'>
                    <UpAndDownVoteButtonHorizontal upvote={upvote} />
                    <CommentButton NumberOfComment={numberOfComment} />
                </div>

            </div>

        </div>
    );
};

export default RecentPost;
