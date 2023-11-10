import React, { useEffect, useState } from 'react';
import './user-bookmark-header.css';
import Bookmark from '../../../model/bookmark';
import { bookmarkApi } from '../../../config/axios';

type BookmarkHeaderProp = {
    uri : string;
}


const BookmarkHeader: React.FC<BookmarkHeaderProp> = ({uri}) => {

    const [bookmark, setBookmark] = useState<Bookmark[]>();
    const fetchUserData = async () => {
        const response = await bookmarkApi.get(uri, { withCredentials: true });

        setBookmark(response.data);
        console.log(response.data);
    };
    useEffect(() => {
        fetchUserData();
    }, [bookmarkApi]);

    const bookmarkCount = bookmark ? bookmark.filter(bookmark => bookmark.bookmarkedBlog).length : 0;

    return (

        <header className='user-bookmark-header'>
            <h1>Your bookmark ({bookmarkCount})</h1>
        </header>
    );
};
export default BookmarkHeader;

    


  
