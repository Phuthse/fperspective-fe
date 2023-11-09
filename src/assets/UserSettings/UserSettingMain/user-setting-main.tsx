import React from 'react';
import './user-setting-main.css';
import { useUserSetting } from '../user-setting-context';
import UserSettingProfile from './UserSettingProfile/user-setting-profile';


const UserSettingMain: React.FC = () => {

    const { selectedNavItem } = useUserSetting();

    return (

        <div className="search-page-main-container">

            {selectedNavItem === 'profile' && (
                <>
                    <UserSettingProfile />
                </>
            )}

        </div>

    );
};

export default UserSettingMain;
