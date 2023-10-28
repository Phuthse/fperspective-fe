import React from 'react';
import './notification-main-post.css';
import BookmarkButton from '../../../home/button/BookmarkButton/bookmark-button';
import CommentButton from '../../../home/button/CommentButton/comment-button';
import UpAndDownVoteButtonHorizontal from '../../../home/button/ReactionButton/up-down-vote-button-horizontal';

type NotificationPageMainPostProp = {
    ProfileImage: string;
    FullName: string;
    DatePosted: string;
    Title: string;
}

const NotificationPageMainPost: React.FC<NotificationPageMainPostProp> =
    ({
        ProfileImage,
        FullName,
        DatePosted,
        Title
    }) => {

        return (

            <div className='notification-page-main-post'>

                <div className="notification-page-profile" >
                    <a href='#'>
                        <img src={ProfileImage} />
                        <div className='notification-page-profile-info'>
                            <h4>
                                <span>{FullName}</span>
                                <p>
                                    &nbsp;shared a new Perspective
                                </p>
                            </h4>
                            <small>{DatePosted}</small>
                        </div>
                    </a>
                </div>

                <div className="notification-page-content">

                    <div className='notification-page-post-title'>
                        <h3>
                            <a href='#'>{Title}</a>
                        </h3>
                    </div>

                    <div className='notification-page-post-tag-container'>
                        <a
                            href='#'
                            className="notification-page-post-tag"
                        >
                            #css
                        </a>
                        <a
                            href='#'
                            className="notification-page-post-tag"
                        >
                            #react
                        </a>
                        <a
                            href='#'
                            className="notification-page-post-tag"
                        >
                            #webdev
                        </a>
                    </div>

                    <div className="notification-page-post-detail">

                        <div className="post-interact">
                            <UpAndDownVoteButtonHorizontal upvote={100} />
                            <CommentButton NumberOfComment={2} />
                        </div>

                        <BookmarkButton />

                    </div>
                </div>

            </div>
        );
    };

export default NotificationPageMainPost;
