import React from 'react';
import './user-setting.css';
import { UserSettingProvider } from './user-setting-context';
import UserSettingSide from './UserSettingSide/user-setting-side';
import UserSettingMain from './UserSettingMain/user-setting-main';

const UserSetting: React.FC = () => {

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
