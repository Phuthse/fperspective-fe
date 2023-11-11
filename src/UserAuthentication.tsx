import React, { useEffect, useState, ReactNode } from 'react';
import { loginApi } from './config/axios';
import User from './model/user';

type UserAuthenProps = {
    children: ReactNode;
};

function timeout(delay: number) {
    return new Promise(res => setTimeout(res, delay));
}

const UserAuthen: React.FC<UserAuthenProps> = ({ children }) => {
    const [loginUser, setLoginUser] = useState<User | null>(null);

    const fetchLoginData = async () => {
        try {
            const response = await loginApi.get('/currentUser', { withCredentials: true });
            setLoginUser(response.data);
        } catch (error) {
            setLoginUser(null);
        }
    };

    useEffect(() => {
        fetchLoginData();
    }, []);

    useEffect(() => {
        const delay = setTimeout(() => {
            timeout(200);
            if (loginUser === null || loginUser === undefined) {
                window.location.href = 'http://localhost:5173/login';
            }
        }, 700);
        return () => clearTimeout(delay);
    }, [loginUser]);

    return <>{children}</>;
};

export default UserAuthen;
