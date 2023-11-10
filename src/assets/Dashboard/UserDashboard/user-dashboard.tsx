import React, { useEffect, useState } from 'react';
import './user-dashboard.css'; // Import your CSS file for styling
import UserOverview from './UserOverview/user-overview';
import UserDashboardSideNav from './UserDashBoardSideNav/user-dashboard-side-nav';
import UserDashoardContent from './UserDashboardContent/user-dashboard-content';
import { UserDashboardProvider } from './user-dashboard-context';
import { loginApi } from '../../../config/axios';
import User from '../../../model/user';

function timeout(delay: number) {
    return new Promise(res => setTimeout(res, delay));
}

const UserDashboard: React.FC = () => {

    const [loginUser, setLoginUser] = useState<User>();
    const fetchLoginData = async () => {
        try {
            const response = await loginApi.get("/currentUser", { withCredentials: true });
            setLoginUser(response.data);
        }
        catch {
            window.location.href = "http://localhost:5173/login"
        }
    };
    useEffect(() => {
        fetchLoginData();
    }, [loginApi]);

    useEffect(() => {
        const delay = setTimeout(() => {
            timeout(200);
            if (loginUser === null || loginUser === undefined) {
                // window.location.reload();
                // window.location.href = 'http://localhost:5173/login';
            }
        }, 700);
        return () => clearTimeout(delay);
    }, [loginUser]);


    return (
        <>
            <div className="user-dashboard-container">
                <div className='user-dashboard-main-content'>
                    <UserOverview />
                    <div className='user-dashboard-nav-content-container'>
                        <UserDashboardProvider>
                            <UserDashboardSideNav currentUser={loginUser} />
                            <UserDashoardContent />
                        </UserDashboardProvider>
                    </div>
                </div>
            </div >
        </>
    );
};

export default UserDashboard;
