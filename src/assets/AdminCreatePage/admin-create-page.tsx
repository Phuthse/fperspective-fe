import React, { useEffect, useState } from 'react';
import './admin-create-page.css'
import SideNav from '../home/SideNavigation/side-nav';

const AdminCreatePage: React.FC = () => {

    return (
        <div className="admin-create-page-container">
            <SideNav />
            <h1>ADMIN CREATE PAGE</h1>
        </div>
    );
};

export default AdminCreatePage;
