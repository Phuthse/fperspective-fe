import React from 'react';
import './admin-dashboard-side.css';
import { useAdminDashboard } from '../admin-dashboard-context';



const AdminDashboardSideNav: React.FC = () => {

    const { selectedNavItem, setSelectedNavItem } = useAdminDashboard();

    return (
        <div className="admin-dashboard-left-nav">
            <nav>
                <ul className="admin-dashboard-left-nav-list">
                    <li
                        className={`admin-dashboard-left-nav-link ${selectedNavItem === 'posts' ? 'active' : ''}`}
                        onClick={() => setSelectedNavItem('posts')}
                    >
                        <a>
                            Posts
                        </a>
                    </li>

                    <li
                        className={`admin-dashboard-left-nav-link ${selectedNavItem === 'tag' ? 'active' : ''}`}
                        onClick={() => setSelectedNavItem('tag')}
                    >
                        <a>
                            Tags
                        </a>
                    </li>

                    <li
                        className={`admin-dashboard-left-nav-link ${selectedNavItem === 'user' ? 'active' : ''}`}
                        onClick={() => setSelectedNavItem('user')}
                    >
                        <a>
                            Users
                        </a>
                    </li>

                </ul>
            </nav>

        </div>
    );
};

export default AdminDashboardSideNav;
