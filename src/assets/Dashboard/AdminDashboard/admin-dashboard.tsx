import React, { useEffect, useState } from 'react';
import './admin-dashboard.css'; // Import your CSS file for styling
import { AdminDashboardProvider } from './admin-dashboard-context';
import AdminDashboardSideNav from './AdminDashboardSide/admin-dashboard-side';
import AdminDashoardContent from './AdminDashboardMain/admin-dashboard-main';
import { loginApi } from '../../../config/axios';
import User from '../../../model/user';

const AdminDashboard: React.FC = () => {

    const [loginUser, setLoginUser] = useState<User>();
    const fetchLoginData = async () => {
        const response = await loginApi.get("/currentUser", { withCredentials: true });
        setLoginUser(response.data);
    };
    useEffect(() => {
        fetchLoginData();
    }, [loginApi]);

    if (loginUser && loginUser?.role === 'ROLE_ADMIN') {
        window.location.href = 'http://localhost:5173';
    }

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
