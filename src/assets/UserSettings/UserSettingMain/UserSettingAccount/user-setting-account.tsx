import React from 'react';
import './user-setting-account.css';


const UserSettingAccount: React.FC = () => {


    return (
        <>
            <div className="user-setting-account-account-container">
                <h2>Account</h2>

                <div className="user-setting-account-password">
                    <label>Current Password</label>
                    <input type="password" />
                </div>

                <div className="user-setting-account-password">
                    <label>New Password</label>
                    <input type="password" />
                </div>

                <div className="user-setting-account-password">
                    <label>Confirm New Password</label>
                    <input type="password" />
                </div>

                <div className="user-setting-account-save">
                    <button type='submit'>Update password</button>
                </div>
            </div>
        </>
    );
};

export default UserSettingAccount;
