import React from 'react';
import './user-analytic.css';
import { UserAnalyticProvider } from './user-analytic-context';
import UserAnalyticSideNav from './UserAnalyticSide/user-analytic-side';
import UserAnalyticContent from './UserAnalyticMain/user-analytic-main';

const UserAnalytic: React.FC = () => {

    return (
        <div className="user-analytic-container">
                <UserAnalyticProvider>
                    <UserAnalyticSideNav />
                    <UserAnalyticContent />
                </UserAnalyticProvider>
        </div>
    );
};

export default UserAnalytic;
