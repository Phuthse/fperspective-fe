import React, { useState } from 'react';
import './user-bookmark-sidebar.css';

type BookmarkSidebarProps = {
    BookmarkMainComponents: JSX.Element[];
    onTagClick: (tag: string | null) => void;
};

const BookmarkSidebar: React.FC<BookmarkSidebarProps> = ({ BookmarkMainComponents, onTagClick }) => {
    const allTags = Array.from(
        new Set(
            BookmarkMainComponents.flatMap((component) => component.props.Tags)
        )
    );

    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const handleTagClick = (tag: string | null) => {
        setSelectedTag(tag);
        onTagClick(tag);
    };

    return (
        <div className="user-bookmark-side">
            <ul>
                <li>
                    <a
                        className={`user-bookmark-side-option ${selectedTag === '' ? 'selected' : ''}`}
                        href='#'
                        onClick={() => handleTagClick('')}
                    >
                        All tags
                    </a>
                </li>
                {allTags.map((tag, index) => (
                    <li key={index}>
                        <a
                            className={`user-bookmark-side-option ${selectedTag === tag ? 'selected' : ''}`}
                            href={`#${tag}`}
                            onClick={() => handleTagClick(tag)}
                        >
                            #{tag}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookmarkSidebar;
