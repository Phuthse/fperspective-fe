import React from 'react';
import './reply-button.css';

type ReplyButtonProps = {
    link: string;
}

const ReplyButton: React.FC<ReplyButtonProps> = ({ link }) => {

    return (
        <a href={link} className='reply-button'>
            <svg width="24" height="24" role="img">
                <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6" stroke="white" fill="none"></path>
            </svg>
            <span>Reply</span>
        </a>
    );
};

export default ReplyButton;
