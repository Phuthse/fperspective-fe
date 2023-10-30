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
                        className={`admin-dashboard-left-nav-link ${selectedNavItem === 'posts' ? 'dashboard-action' : ''}`}
                        onClick={() => setSelectedNavItem('posts')}
                    >
                        <a>
                            Posts
                        </a>
                    </li>

                    <li
                        className={`admin-dashboard-left-nav-link ${selectedNavItem === 'tag' ? 'dashboard-action' : ''}`}
                        onClick={() => setSelectedNavItem('tag')}
                    >
                        <a>
                            Tags
                        </a>
                    </li>

                    <li
                        className={`admin-dashboard-left-nav-link ${selectedNavItem === 'user' ? 'dashboard-action' : ''}`}
                        onClick={() => setSelectedNavItem('user')}
                    >
                        <a>
                            New Users
                        </a>
                    </li>

                    <li
                        className={`admin-dashboard-left-nav-link ${selectedNavItem === 'trafic' ? 'dashboard-action' : ''}`}
                        onClick={() => setSelectedNavItem('trafic')}
                    >
                        <a>
                            Current Users
                        </a>
                    </li>

                    <li
                        className={`admin-dashboard-left-nav-link ${selectedNavItem === 'major' ? 'dashboard-action' : ''}`}
                        onClick={() => setSelectedNavItem('major')}
                    >
                        <a>
                            Major
                        </a>
                    </li>

                </ul>
            </nav>

        </div>
    );
};

export default AdminDashboardSideNav;
