import React from 'react';
import './blog-post.css';
import UserProfile from '../UserProfile/user-profile';
import BlogTitle from '../BlogTitle/blog-title';
import BlogTags from '../BlogTags/blog-tags';
import UpAndDownVoteButton from '../../button/ReactionButton/up-down-vote-button';
import CommentButton from '../../button/CommentButton/comment-button';
import BookmarkButton from '../../button/BookmarkButton/bookmark-button';

type BlogPostProps = {
    fullName: string;
    timeUpload: string;
    src: string
    blogTitle: string;
    blogTags: string[];
    upvote: number;
    numberOfComment: number;
}


const BlogPost: React.FC<BlogPostProps> = ({
    fullName,
    timeUpload,
    src,
    blogTitle,
    blogTags,
    upvote,
    numberOfComment
}) => {

    return (
        <div className="post-container">

            <UserProfile
                name={fullName}
                time={timeUpload}
                src={src}
            />

            <BlogTitle title={blogTitle} />

            <BlogTags tags={blogTags} />

            <div className="post-details">

                <div className='post-interact'>
                    <UpAndDownVoteButton upvote={upvote} />
                    <CommentButton NumberOfComment={numberOfComment} />
                </div>

                <div className="bookmark-button">
                    <BookmarkButton />
                </div>
            </div>

        </div>
    );
};

export default BlogPost;
