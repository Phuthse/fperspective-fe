import React, { useState } from 'react';
import './user-bookmark.css';
import BookmarkHeader from './UserBookmarkHeader/user-bookmark-header';
import BookmarkSidebar from './UserBookmarkSidebar/user-bookmark-sidebar';
import BookmarkMain from './UserBookmarkMain/bookmark-main';

const UserBookmark: React.FC = () => {
    const [bookmarkMainComponents] = useState<JSX.Element[]>([

        <BookmarkMain
            ProfileImage='https://i.ytimg.com/vi/pxcmKupu-Sw/maxresdefault.jpg'
            BookmarkAuthor='Bob Bobby Bober'
            BookmarkTitle='How to make 6 digits a month'
            DatePosted='Oct 2 2023'
            Tags={['python', 'css', 'react', 'programming']}
        />,
        <BookmarkMain
            ProfileImage='https://variety.com/wp-content/uploads/2022/12/tate-e1672354672579.webp'
            BookmarkAuthor='Andrew Daddy'
            BookmarkTitle='How to make 9 digits a month (not clickbait)'
            DatePosted='Oct 2 2023'
            Tags={['python', 'css', 'docker', 'java']}
        />,
        <BookmarkMain
            ProfileImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSndb2FgNqOLv20lderNLMGQ3QTMNqg-gWG8iNCPs7grg&s'
            BookmarkAuthor='Elon Mask'
            BookmarkTitle='How to make a pipe bomb out of thin air'
            DatePosted='Sep 12 2023'
            Tags={['webdev', '.NET', 'SAP', 'tutorial']}
        />,
        <BookmarkMain
            ProfileImage='https://file1.dangcongsan.vn/data/0/images/2023/09/05/upload_21/joe-biden-presidential-portrait.jpg'
            BookmarkAuthor='Joe Biden'
            BookmarkTitle='How I become US 47 president (story time)'
            DatePosted='Aug 1 2023'
            Tags={['node', 'coding', 'SAP', 'tutorial']}
        />

    ]);


    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const handleTagClick = (tag: string | null) => {
        setSelectedTag(tag);
    };

    return (
        <div className='user-bookmark-container'>
            <BookmarkHeader uri='/show' />
            <div className='user-bookmark-body'>
                <BookmarkSidebar
                    BookmarkMainComponents={bookmarkMainComponents}
                    onTagClick={handleTagClick}
                />
                <div className="user-bookmark-main-container">
                    {bookmarkMainComponents
                        .filter((component) => !selectedTag || component.props.Tags.includes(selectedTag))
                    }
                </div>
            </div>
        </div>
    );
};

export default UserBookmark;
