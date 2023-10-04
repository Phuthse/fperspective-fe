import React from 'react';
import './comment-button.css';

type CommentNumberProps = {
    NumberOfComment: number;
}

const CommentButton: React.FC<CommentNumberProps> = ({ NumberOfComment }) => {
    const commentText = NumberOfComment > 1 ? "Comments" : "Comment";

    return (
        <a href='#' className='post-comment-number'>
            {NumberOfComment} {commentText}
        </a>
    );
};

export default CommentButton;
