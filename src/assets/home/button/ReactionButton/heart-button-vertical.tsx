import React, { useEffect, useState } from 'react';
import './heart-button-vertical.css';
import { loginApi, blogApi } from '../../../../config/axios';
import User from '../../../../model/user';
import Blog from '../../../../model/blog';

type HeartButtonProps = {
    currentBlog: Blog;
};

const HeartButtonVertical: React.FC<HeartButtonProps> = ({ currentBlog }) => {
    const [likes, setLikes] = useState<number>(currentBlog.like.length);
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [loading, setLoading] = useState(true);

    const initialUser: User = {
        userID: '',
        username: '',
        bio: '',
        email: '',
        avatarUrl: '',
        campus: '',
        term: '',
        category: '',
        fullName: '',
        createdDate: 0,
        status: false,
        role: '',
        loginProvider: '',
        name: ''
    }

    const [currentUser, setCurrentUser] = useState<User>(initialUser);

    const fetchLoginData = async () => {
        try {
            const response = await loginApi.get('/currentUser', { withCredentials: true });
            setCurrentUser(response.data);
            setLoading(false)
        } catch (error) {
            console.error('Error fetching login data:', error);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            await fetchLoginData();
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (currentUser) {
            setIsLiked(currentBlog.like.includes(currentUser.userID));
        }
    }, [currentUser, currentBlog]);

    const handleLike = () => {
        const updatedLike = [...currentBlog.like, currentUser.userID];
        const likeData: Blog = {
            ...currentBlog,
            like: updatedLike
        };
        blogApi.post(`/like`, likeData, { withCredentials: true })
            .then((response) => {
                console.log('BLOG LIKED:', response);
                console.log(likeData.like)
            })
            .catch((error) => {
                console.error('BLOG LIKE FAILED: ', error);
            });
    };

    const handleUnlike = () => {
        const updatedLike = currentBlog.like.filter(id => id !== currentUser.userID);
        const likeData: Blog = {
            ...currentBlog,
            like: updatedLike || []
        };
        blogApi.post(`/unlike`, likeData, { withCredentials: true })
            .then((response) => {
                console.log('BLOG UNLIKED:', response.data);
                console.log(likeData.like)
            })
            .catch((error) => {
                console.error('BLOG UNLIKED FAILED: ', error);
            });
    }

    const handleHeartClick = () => {
        if (isLiked) {
            handleUnlike();
            setIsLiked(!isLiked);
            setLikes(isLiked ? likes - 1 : likes + 1);
        } else {
            handleLike();
            setIsLiked(!isLiked);
            setLikes(isLiked ? likes - 1 : likes + 1);
        }

    };
    
    return (
        <>
            {!loading && (
                <div className={`heart-button-vertical ${isLiked ? 'liked' : ''}`} onClick={handleHeartClick}>
                    <svg width={30} height={30} viewBox="0 0 24 24">
                        <g>
                            <path
                                fill={isLiked ? 'red' : 'white'}
                                d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                            ></path>
                        </g>
                    </svg>
                    <span className="like-count">{likes}</span>
                </div>
            )}
        </>
    );
};

export default HeartButtonVertical;
