import React, { useEffect, useState } from 'react';
import './user-page.css';
import UserItemList from './UserItem/user-item-list';
import { loginApi, userApi } from '../../config/axios';
import User from '../../model/user';
import UserListPagekHeader from './UserListPageHeader/user-page-header';

const UserListPage: React.FC = () => {
    const [loginUser, setLoginUser] = useState<User>();
    const [users, setUsers] = useState<User[]>([]);
    const [campusOptions, setCampusOptions] = useState<string[]>([]);
    const [majorOptions, setMajorOptions] = useState<string[]>([]);
    const [selectedCampus, setSelectedCampus] = useState<string | null>(null);
    const [selectedMajor, setSelectedMajor] = useState<string | null>(null);
    const [showCampusOptions, setShowCampusOptions] = useState(false);
    const [showMajorOptions, setShowMajorOptions] = useState(false);

    const fetchLoginData = async () => {
        const response = await loginApi.get('/currentUser', { withCredentials: true });
        setLoginUser(response.data);
    };

    if (!loginUser) {
        <h1 style={{ color: 'white' }}>Loading...</h1>
    }
    else if (loginUser?.role === 'ROLE_USER') {
        window.location.href = `${import.meta.env.VITE_FRONTEND_URL}`
    }

    const fetchUserData = async () => {
        const response = await userApi.get('/show', { withCredentials: true });
        setUsers(response.data);
        // Extract unique campus and major values
        const uniqueCampusOptions: string[] = Array.from(
            new Set(response.data.map((user: User) => user.campus))
        );
        const uniqueMajorOptions: string[] = Array.from(
            new Set(response.data.map((user: User) => user.category))
        );

        setCampusOptions(uniqueCampusOptions);
        setMajorOptions(uniqueMajorOptions);
    };

    useEffect(() => {
        fetchLoginData();
        fetchUserData();
    }, []);

    const filterByCampus = (campus: string) => {
        setSelectedCampus(campus);
        setSelectedMajor(null);
        setShowCampusOptions(false);
        setShowMajorOptions(false);
    };

    const filterByMajor = (major: string) => {
        setSelectedMajor(major);
        setSelectedCampus(null);
        setShowMajorOptions(false);
        setShowCampusOptions(false);
    };

    const toggleCampusOptions = () => {
        setShowCampusOptions(!showCampusOptions);
        setShowMajorOptions(false);
    };

    const toggleMajorOptions = () => {
        setShowMajorOptions(!showMajorOptions);
        setShowCampusOptions(false);
    };

    const toggleAllOption = () => {
        setShowMajorOptions(false)
        setShowCampusOptions(false)
        setSelectedCampus(null)
        setSelectedMajor(null)
    }

    const filteredUsers = selectedCampus
        ? users.filter((user) => user.campus === selectedCampus)
        : selectedMajor
            ? users.filter((user) => user.category === selectedMajor)
            : users;

    return (
        <>
            <UserListPagekHeader count={filteredUsers.length} />
            <div className="user-page-list-container">
                <div className='user-page-list-filter'>
                    <div className="user-page-option-list-label">
                        <button onClick={toggleCampusOptions}>
                            Campus
                        </button>
                        <div className="user-page-option-list">
                            {showCampusOptions && campusOptions.map((campus) => (
                                <option key={campus} onClick={() => filterByCampus(campus)}>
                                    {campus}
                                </option>
                            ))}
                        </div>
                    </div>
                    <div className="user-page-option-list-label">
                        <button onClick={toggleMajorOptions}>
                            Major
                        </button>
                        <div className="user-page-option-list">
                            {showMajorOptions && majorOptions.map((major) => (
                                <option key={major} onClick={() => filterByMajor(major)}>
                                    {major}
                                </option>
                            ))}
                        </div>
                    </div>
                    <div className="user-page-option-list-label">
                        <button onClick={toggleAllOption}>
                            All
                        </button>
                    </div>
                </div>
                {!(selectedCampus || selectedMajor) && (
                    <UserItemList userUri="/show" />
                )}
                {selectedCampus && (
                    <UserItemList userUri={`/campus/${selectedCampus}/all`} />
                )}
                {selectedMajor && (
                    <UserItemList userUri={`/category/${selectedMajor}/all`} />
                )}
            </div>
        </>
    );
};

export default UserListPage;

