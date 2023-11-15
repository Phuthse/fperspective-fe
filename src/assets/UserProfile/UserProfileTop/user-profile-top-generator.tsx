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
        bio: "test",
        email: "test",
        avatarUrl: "test",
        campus: "test",
        term: "test",
        category: "test",
        fullName: "test",
        createdDate: 2,
        status: false,
        role: '',
        loginProvider: 'GOOGLE',
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
