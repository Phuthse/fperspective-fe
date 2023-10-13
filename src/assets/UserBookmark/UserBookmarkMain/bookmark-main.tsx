import React from 'react';
import './bookmark-main.css';
import BookmarkTags from './UserBookmarkTags/bookmark-tags';

type BookmarkMainProps = {
    ProfileImage: string;
    BookmarkTitle: string;
    BookmarkAuthor: string;
    DatePosted: string;
    Tags: string[]
}

const BookmarkMain: React.FC<BookmarkMainProps> = ({ ProfileImage, BookmarkTitle, BookmarkAuthor, DatePosted, Tags }) => {
    return (


        <div className='user-bookmark-main'>

            <div className='user-bookmark-profile'>
                <a href="#">
                    <img src={ProfileImage} />
                </a>
            </div>

            <div className="user-bookmark-content">

                <div className='user-bookmark-post-title'>
                    <h3>
                        <a href='#'>{BookmarkTitle}</a>
                    </h3>
                </div>

                <div className="user-bookmark-post-detail">

                    <div className="user-bookmark-profile-name">
                        <h4>
                            <a href="#">
                                {BookmarkAuthor}
                            </a>
                            <span> - {DatePosted}</span>
                        </h4>
                    </div>

                    <BookmarkTags Tags={Tags} />

                </div>
            </div>

        </div>


    );
};
export default BookmarkMain;
