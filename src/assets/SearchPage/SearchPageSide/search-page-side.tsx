import React from 'react';
import './search-page-side.css';
import { useSearchPage } from '../search-page-context';


const SearchPageSide: React.FC = () => {

    const { selectedNavItem, setSelectedNavItem } = useSearchPage();

    return (
        <div className="search-page-side">
            <ul>
                <li>
                    <a
                        className={`search-page-side-option ${selectedNavItem === 'post' ? 'active' : ''}`}
                        onClick={() => setSelectedNavItem('post')}
                    >
                        Post
                    </a>
                </li>
                <li>
                    <a
                        className={`search-page-side-option ${selectedNavItem === 'tag' ? 'active' : ''}`}
                        onClick={() => setSelectedNavItem('tag')}
                    >
                        Tags
                    </a>
                </li>
                <li>
                    <a
                        className={`search-page-side-option ${selectedNavItem === 'people' ? 'active' : ''}`}
                        onClick={() => setSelectedNavItem('people')}
                    >
                        People
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SearchPageSide;
