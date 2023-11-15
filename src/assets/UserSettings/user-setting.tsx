import React, { useEffect, useState } from 'react';
import './user-setting.css';
import { UserSettingProvider } from './user-setting-context';
import UserSettingSide from './UserSettingSide/user-setting-side';
import UserSettingMain from './UserSettingMain/user-setting-main';
import { loginApi } from '../../config/axios';
import User from '../../model/user';

const UserSetting: React.FC = () => {

    const [, setLoginUser] = useState<User>();
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

    return (
        <div className="user-setting-container">
            <UserSettingProvider>
                <UserSettingSide />
                <UserSettingMain />
            </UserSettingProvider>
        </div>
    );
};

export default UserSetting;
