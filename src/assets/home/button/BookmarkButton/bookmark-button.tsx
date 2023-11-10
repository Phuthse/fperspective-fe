import React, { useEffect, useState } from 'react';
import { IconBookmarkFilled, IconBookmark } from "@tabler/icons-react";
import './bookmark-button.css';
import User from '../../../../model/user';
import Blog from '../../../../model/blog';
import { bookmarkApi, loginApi } from '../../../../config/axios';
import Bookmark from '../../../../model/bookmark';


type BookmarkProps = {
    currentBlog: Blog;
};

const BookmarkButton: React.FC<BookmarkProps> = ({ currentBlog }) => {

    const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
    const [loginUser, setLoginUser] = useState<User>();
    const [currentUser, setCurrentUser] = useState<Bookmark>();
    const [loading, setLoading] = useState(true);

    const fetchLoginData = async () => {
        try {
            const response = await loginApi.get('/currentUser', { withCredentials: true });
            setLoginUser(response.data);
        } catch (error) {
            console.error('Error fetching login data:', error);
        }
    };

    const fetchBookmarkData = async () => {
        try {
            const response = await bookmarkApi.get(`show/${loginUser?.userID}`, { withCredentials: true });
            setCurrentUser(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching bookmark data:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await fetchLoginData();
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (loginUser) {
            fetchBookmarkData();
        }
    }, [loginUser]);

    useEffect(() => {
        if (currentUser?.bookmarkedPost.includes(currentBlog.blogId)) {
            setIsBookmarked(true);
        }
    }, [currentUser, currentBlog.blogId]);


    const handleUnbookmark = () => {
        const updatedBookmark = currentUser?.bookmarkedPost.filter(id => id !== currentBlog.blogId);
        const bookmarkData = {
            ...currentUser,
            bookmarkedPost: updatedBookmark || []
        };

        bookmarkApi.post(`/update`, bookmarkData, { withCredentials: true })
            .then((response) => {
                console.log('BLOG UNBOOKMARKED:', response.data);
                setIsBookmarked(!isBookmarked);
            })
            .catch((error) => {
                console.error('Error UNBOOKMARKING blog: ', error);
            });
    };

    const handleBookmark = () => {
        const bookmarkData = {
            ...currentUser,
            bookmarkedPost: [
                ...(currentUser?.bookmarkedPost || []),
                currentBlog.blogId
            ]
        };
        bookmarkApi.post(`/update`, bookmarkData, { withCredentials: true })
            .then((response) => {
                console.log('BLOG BOOKMARKED:', response.data);
                setIsBookmarked(!isBookmarked);
            })
            .catch((error) => {
                console.error('Error BOOKMARK blog: ', error);
            });
    };

    const toggleBookmark = () => {
        if (isBookmarked) {
            handleUnbookmark();
        } else {
            handleBookmark();
        }
    };

    return (
        <>
            {!loading && (
                <div className='bookmark-button' onClick={toggleBookmark}>
                    {isBookmarked ? <IconBookmarkFilled /> : <IconBookmark />}
                </div>
            )}
        </>
    );
};

export default BookmarkButton;