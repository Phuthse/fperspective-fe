import React from 'react';
import './user-setting-main.css';
import { useUserSetting } from '../user-setting-context';
import UserSettingProfile from './UserSettingProfile/user-setting-profile';
import UserSettingAccount from './UserSettingAccount/user-setting-account';


const UserSettingMain: React.FC = () => {

    const { selectedNavItem } = useUserSetting();

    return (

        <div className="search-page-main-container">

            {selectedNavItem === 'profile' && (
                <>
                    <UserSettingProfile />
                </>
            )}

            {selectedNavItem === 'account' && (
                <>
                    <UserSettingAccount />
                </>
            )}

        </div>

    );
};

export default UserSettingMain;
