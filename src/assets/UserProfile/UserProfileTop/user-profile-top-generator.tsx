import './user-profile-top.css';
import UserProfileTop from './user-profile-top';
import { useEffect, useState } from 'react';
import User from '../../../model/user';
import { userApi } from '../../../config/axios';

type UserProfileTopProp = {
    userUri: string;
}

const UserProfileTopGenerator: React.FC<UserProfileTopProp> = ({ userUri }) => {

    const initialUser: User = {
        userID: "1",
        username: "Loading...",
        bio: "Loading...",
        email: "Loading...",
        avatarUrl: "Loading...",
        campus: "Loading...",
        term: "Loading...",
        category: "Loading...",
        fullName: "Loading...",
        createdDate: 2,
        status: false,
        role: '',
        loginProvider: '',
        name: ''
    }

    const [users, setUsers] = useState<User>(initialUser);
    const fetchUserData = async () => {
        const response = await userApi.get(userUri, { withCredentials: true });
        setUsers(response.data);
    };
    useEffect(() => {
        fetchUserData();
    }, [userUri]);

    return (
        <>
            <UserProfileTop
                key={users.userID}
                userProfile={users}
            />
        </>
    );
};

export default UserProfileTopGenerator;
