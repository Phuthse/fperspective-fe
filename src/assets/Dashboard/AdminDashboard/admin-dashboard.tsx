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
        try {
            const response = await loginApi.get("/currentUser", { withCredentials: true });
            setLoginUser(response.data);
        } catch {
            window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`;
        }
    };
    useEffect(() => {
        fetchLoginData();
    }, [loginApi]);

    if (!loginUser?.userID) {
        return <h1 style={{ color: 'white' }}>Loading...</h1>;
    }
    else if (loginUser && loginUser?.role !== 'ROLE_ADMIN') {
        window.location.href = `${import.meta.env.VITE_FRONTEND_URL}`;
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
