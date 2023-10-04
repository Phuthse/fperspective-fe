import React from 'react';
import './post-comment.css';
import UpAndDownVoteButtonHorizontal from '../../../home/button/ReactionButton/up-down-vote-button-horizontal';
import ReplyButton from '../../../home/button/ReplyButton/reply-button';

type PostCommentProps = {
    ProfilePic: string[];
    FullName: string[];
    CommentDate: string[];
    CommentContent: string[];
    Upvote: number[];
}

const PostComment: React.FC<PostCommentProps> = ({ ProfilePic, FullName, CommentDate, CommentContent, Upvote }) => {

    return (
        <div className='post-comment-section'>
            {ProfilePic.map((pic, index) => (
                <div className="post-comment" key={index}>
                    <a href='#'>
                        <img
                            className='post-comment-profile-pic'
                            src={pic}
                        />
                    </a>
                    <div className='post-comment-inner'>
                        <div className="comment-card">
                            <div className="comment-header">
                                <a href='#'>
                                    {FullName[index]}
                                </a>
                                <span>&nbsp;•&nbsp;</span>
                                <p>{CommentDate[index]}</p>
                            </div>
                            <div className="comment-body">
                                {CommentContent[index]}
                            </div>
                        </div>
                        <footer>
                            <UpAndDownVoteButtonHorizontal upvote={Upvote[index]} />
                            <ReplyButton link='#' />
                        </footer>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostComment;
