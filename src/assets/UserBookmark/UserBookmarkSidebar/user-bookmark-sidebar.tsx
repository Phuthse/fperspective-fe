import React from 'react';
import './user-bookmark-sidebar.css';

type BookmarkSidebarProps = {
    BookmarkMainComponents: JSX.Element[];
    onTagClick: (tag: string) => void; // Add an event handler
};

const BookmarkSidebar: React.FC<BookmarkSidebarProps> = ({ BookmarkMainComponents, onTagClick }) => {
    const allTags = Array.from(
        new Set(
            BookmarkMainComponents.flatMap((component) => component.props.Tags)
        )
    );

    return (
        <div className="user-bookmark-side">
            <ul>
                <li>
                    <a href='#' onClick={() => onTagClick('')}>All tags</a>
                </li>
                {allTags.map((tag, index) => (
                    <li key={index}>
                        <a href={`#${tag}`} onClick={() => onTagClick(tag)}>#{tag}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookmarkSidebar;
