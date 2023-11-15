// authUtils.ts
import { useEffect, useState } from 'react';
import { loginApi } from './config/axios';
import User from './model/user';

export const useFetchLoginData = (): User | null | undefined => {
    const [loginUser, setLoginUser] = useState<User | null | undefined>(null);

    const fetchLoginData = async () => {
        try {
            const response = await loginApi.get("/currentUser", { withCredentials: true });
            setLoginUser(response.data);
        } catch (error) {
            console.error(error);
            setLoginUser(undefined);
        }
    };

    useEffect(() => {
        fetchLoginData();
    }, []);

    return loginUser;
};

export const redirectToHomeIfLoggedIn = (loginUser: User | null | undefined, delay: number = 1000) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (loginUser !== null && loginUser !== undefined) {
                window.location.href = '/'; // Redirect to the home page if the user is already logged in
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [loginUser, delay]);
};

export const redirectToLoginIfNotLoggedIn = (loginUser: User | null | undefined, delay: number = 1000) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (loginUser === null || loginUser === undefined) {
                window.location.href = '/login'; // Redirect to the login page if the user is not logged in
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [loginUser, delay]);
};
