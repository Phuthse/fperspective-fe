import React from 'react';
import './post-comment-form.css';

type CommentFormProps = {
    ProfilePic: string;
}


const PostCommentForm: React.FC<CommentFormProps> = ({ProfilePic}) => {

    return (
        <form className='comment-form'>
            <span><img src={ProfilePic} /></span>
            <textarea className='comment-box' rows={6} placeholder='What are you thoughts' />
        </form>
    );
};

export default PostCommentForm;
