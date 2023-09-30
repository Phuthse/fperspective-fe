import { useState } from 'react';

function FollowButton() {
    const [isFollowed, setIsFollowed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <button
            style={{
                width: '100px',
                backgroundColor: isFollowed ? (isHovered ? 'red' : 'black') : 'white',
                color: isFollowed ? (isHovered ? 'white' : 'white') : 'black',
                border: isFollowed ? (isHovered ? '2px solid red' : '2px solid white') : '2px solid black',
                borderRadius: '20px',
                padding: '6px 12px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
            }}
            onClick={() => setIsFollowed(!isFollowed)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isFollowed ? (isHovered ? 'Unfollow' : 'Following') : 'Follow'}
        </button>
    );
}

export default FollowButton;

