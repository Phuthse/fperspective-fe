import React, { useState } from 'react';
import { IconBookmarkFilled, IconBookmark } from "@tabler/icons-react";
import './bookmark-button.css';


interface BookmarkToggleProps {
    initialBookmarkState?: boolean; 
}

const BookmarkButton: React.FC<BookmarkToggleProps> = ({ initialBookmarkState = false }) => {
    const [isBookmarked, setIsBookmarked] = useState<boolean>(initialBookmarkState);

    const toggleBookmark = () => {
        setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);
    };

    return (
        <div className='bookmark-button' onClick={toggleBookmark}>
            {isBookmarked ? <IconBookmarkFilled /> : <IconBookmark />}
        </div>
    );
};

export default BookmarkButton;