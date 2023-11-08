import React, { useEffect, useState } from 'react';
import './home-page.css'
import SideNav from './SideNavigation/side-nav';
import BlogList from './blog/BlogPost/blog-list';
import { loginApi } from '../../config/axios';
import User from '../../model/user';

const ApprovePage: React.FC = () => {
    const [loginUser, setLoginUser] = useState<User | null>(null);
    const [roleChecked, setRoleChecked] = useState(false);

    useEffect(() => {
        const fetchLoginData = async () => {
            try {
                const response = await loginApi.get("/currentUser", { withCredentials: true });
                setLoginUser(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
                setLoginUser(null); // Set to null in case of an error
            } finally {
                setRoleChecked(true);
            }
        };

        fetchLoginData();
    }, []);

    return (
        <div className="container">
            <SideNav />
            <div className='approve-page-main-content'>
                {roleChecked && (loginUser?.role === 'ROLE_ADMIN') ? (
                    <BlogList uri={"/approve/all"} />
                ) : roleChecked && (
                    window.location.href = 'http://localhost:5173'
                )}
            </div>
        </div>
    );
};

export default ApprovePage;
