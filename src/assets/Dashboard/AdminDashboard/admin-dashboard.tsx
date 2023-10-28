import React from 'react';
import './admin-dashboard.css'; // Import your CSS file for styling
import { AdminDashboardProvider } from './admin-dashboard-context';
import AdminDashboardSideNav from './AdminDashboardSide/admin-dashboard-side';
import AdminDashoardContent from './AdminDashboardMain/admin-dashboard-main';

const AdminDashboard: React.FC = () => {
    return (
        <>

            <div className='user-dashboard-nav-content-container'>

                <AdminDashboardProvider>
                    <AdminDashboardSideNav />
                    <AdminDashoardContent />
                </AdminDashboardProvider>

            </div>

        </>
    );
};

export default AdminDashboard;
