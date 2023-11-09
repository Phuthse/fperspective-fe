import React from 'react';
import './user-setting-side.css';
import { useUserSetting } from '../user-setting-context';


const UserSettingSide: React.FC = () => {

    const { selectedNavItem, setSelectedNavItem } = useUserSetting();

    return (
        <div className="user-setting-side">
            <ul>
                <li>
                    <a
                        className={`user-setting-side-option ${selectedNavItem === 'profile' ? 'selectedOption' : ''}`}
                        onClick={() => setSelectedNavItem('profile')}
                    >
                        Profile
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default UserSettingSide;
