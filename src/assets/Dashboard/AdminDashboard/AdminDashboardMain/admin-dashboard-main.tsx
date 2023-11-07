import React from 'react';
import './admin-dashboard-main.css';
import { useAdminDashboard } from '../admin-dashboard-context';
import AdminDashoardPostCharts from './AdminDashboardMainPost/admin-dashboard-post';
import AdminDashoardTagCharts from './AdminDashboardMainTag/admin-dashboard-tag';
import AdminDashoardSubjectCharts from './AdminDashboardMainSubject/admin-dashboard-subject';
import AdminDashoardUserCharts from './AdminDashboardMainUser/admin-dashboard-user';
import AdminDashoardTraficCharts from './AdminDashboardMainTrafic/admin-dashboard-trafic';
import AdminDashoardMajorCharts from './AdminDashboardMainMajor/admin-dashboard-major';

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

            {selectedNavItem === 'subject' && (
                <>
                    <AdminDashoardSubjectCharts />
                </>
            )}

            {/* Display user's following tags */}
            {selectedNavItem === 'user' && (
                <>
                    <AdminDashoardUserCharts />
                </>
            )}

            {selectedNavItem === 'trafic' && (
                <>
                    <AdminDashoardTraficCharts />
                </>
            )}

            {selectedNavItem === 'major' && (
                <>
                    <AdminDashoardMajorCharts />
                </>
            )}


        </div>
    );
};

export default AdminDashoardContent;
