import React from 'react';
import './admin-dashboard-main.css';
import { useAdminDashboard } from '../admin-dashboard-context';
import AdminDashoardPostCharts from './AdminDashboardMainPost/admin-dashboard-post';
import AdminDashoardTagCharts from './AdminDashboardMainTag/admin-dashboard-tag';
import AdminDashoardUserCharts from './AdminDashboardMainUser/admin-dashboard-user';

const AdminDashoardContent: React.FC = () => {

    const { selectedNavItem } = useAdminDashboard();

    return (

        <div className="admin-dashboard-content">

            {/* Display user's recent posts */}
            {selectedNavItem === 'posts' && (
                <>
                    <AdminDashoardPostCharts />
                </>
            )}

            {/* Display user's followers */}
            {selectedNavItem === 'tag' && (
                <>
                    <AdminDashoardTagCharts />
                </>
            )}

            {/* Display user's following tags */}
            {selectedNavItem === 'user' && (
                <>
                    <AdminDashoardUserCharts />
                </>
            )}

        </div>
    );
};

export default AdminDashoardContent;
