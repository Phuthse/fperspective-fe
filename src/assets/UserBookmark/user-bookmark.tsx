import React from 'react';
import BookmarkButton from '../home/button/BookmarkButton/bookmark-button';
import './user-bookmark.css';

type UserBookmarkProps = {
    BookmarkTitle: string[];
    BookmarkDesc: string[];
    authorProfileImage: string[];
    authorFullName: string[];
    
}

const UserBookmark: React.FC<UserBookmarkProps> = ({ BookmarkTitle, BookmarkDesc,authorProfileImage,authorFullName }) => {
    return (
        <div className='user-bookmark-container'>
            {BookmarkTitle.map((bookmarkTitle, index) => (
                <div className='user-bookmark'>
                    <div className='bookmark-title'>
                        <h4>
                            <a href='#'>{bookmarkTitle}</a>
                        </h4>
                    </div>
                    <p className="bookmark-des">{BookmarkDesc[index]}</p>
                    <div className='bookmark-img-name'>
                        <a href="#">
                            <img src={authorProfileImage[index]} alt={`Profile of ${authorFullName}`} />
                        </a>

                        <div className="profile-name">
                            <h4>
                                <a href="#">
                                    {authorFullName[index]}
                                </a>
                            </h4>
                        </div>
                    </div>
                    <div className="dashboard-tag-buttons-container">
                        <BookmarkButton 
                            initialBookmarkState
                        />
                    </div>
                </div>
            ))}


        </div>

    );
};
export default UserBookmark;
