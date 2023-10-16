import React from 'react';
import './main-post.css';
import BookmarkButton from '../../../home/button/BookmarkButton/bookmark-button';
import CommentButton from '../../../home/button/CommentButton/comment-button';
import UpAndDownVoteButtonHorizontal from '../../../home/button/ReactionButton/up-down-vote-button-horizontal';

type SearchPageMainPostProp = {
    ProfileImage: string;
    FullName: string;
    DatePosted: string;
    Title: string;
}

const SearchPageMainPost: React.FC<SearchPageMainPostProp> =
    ({
        ProfileImage,
        FullName,
        DatePosted,
        Title
    }) => {

        return (

            <div className='search-page-main-post'>

                <div className="search-page-profile" >
                    <a href='#'>
                        <img src={ProfileImage} />
                        <div className='search-page-profile-info'>
                            <p>{FullName}</p>
                            <small>{DatePosted}</small>
                        </div>
                    </a>
                </div>

                <div className="search-page-content">

                    <div className='search-page-post-title'>
                        <h3>
                            <a href='#'>{Title}</a>
                        </h3>
                    </div>

                    <div className='search-page-post-tag-container'>
                        <a
                            href='#'
                            className="search-page-post-tag"
                        >
                            #css
                        </a>
                        <a
                            href='#'
                            className="search-page-post-tag"
                        >
                            #react
                        </a>
                        <a
                            href='#'
                            className="search-page-post-tag"
                        >
                            #webdev
                        </a>
                    </div>

                    <div className="search-page-post-detail">

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

export default SearchPageMainPost;
