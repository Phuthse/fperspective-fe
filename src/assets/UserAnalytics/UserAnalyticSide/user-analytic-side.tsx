import React from 'react';
import './user-analytic-side.css';
import { useUserAnalytic } from '../user-analytic-context';



const UserAnalyticSideNav: React.FC = () => {

    const { selectedNavItem, setSelectedNavItem } = useUserAnalytic();

    return (
        <div className="user-analytic-left-nav">
            <nav>
                <ul className="user-analytic-left-nav-list">
                    <li
                        className={`user-analytic-left-nav-link ${selectedNavItem === 'posts' ? 'active' : ''}`}
                        onClick={() => setSelectedNavItem('posts')}
                    >
                        <a>
                            Posts
                        </a>
                    </li>

                    <li
                        className={`user-analytic-left-nav-link ${selectedNavItem === 'upvotes' ? 'active' : ''}`}
                        onClick={() => setSelectedNavItem('upvotes')}
                    >
                        <a>
                            Upvotes
                        </a>
                    </li>

                    <li
                        className={`user-analytic-left-nav-link ${selectedNavItem === 'comments' ? 'active' : ''}`}
                        onClick={() => setSelectedNavItem('comments')}
                    >
                        <a>
                            Comments
                        </a>
                    </li>

                    <li
                        className={`user-analytic-left-nav-link ${selectedNavItem === 'followers' ? 'active' : ''}`}
                        onClick={() => setSelectedNavItem('followers')}
                    >
                        <a>
                            Followers
                        </a>
                    </li>

                </ul>
            </nav>

        </div>
    );
};

export default UserAnalyticSideNav;
