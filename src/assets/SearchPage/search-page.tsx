import React, { useEffect, useState } from 'react';
import './search-page.css';
import { SearchPageProvider } from './search-page-context';
import SearchPageTop from './SearchPageTop/search-page-top';
import SearchPageSide from './SearchPageSide/search-page-side';
import SearchPageMain from './SearchPageMain/search-page-main';
import { useParams } from 'react-router';
import { loginApi } from '../../config/axios';
import User from '../../model/user';

function timeout(delay: number) {
    return new Promise(res => setTimeout(res, delay));
}

const SearchPage: React.FC = () => {

    const { searchText } = useParams();

    const search = searchText as string;

    /* REDIRECT TO LOGIN PAGE IF NOT LOGGED IN */
    const [currentLoginUser, setCurrentLoginUser] = useState<User>();
    const fetchCurrentLoginData = async () => {
        try {
            const response = await loginApi.get("/currentUser", { withCredentials: true });
            setCurrentLoginUser(response.data);
        }
        catch {
            window.location.href = "http://localhost:5173/login"
        }
    };
    useEffect(() => {
        fetchCurrentLoginData();
    }, [loginApi]);
    useEffect(() => {
        const delay = setTimeout(() => {
            timeout(200);
            if (currentLoginUser === null || currentLoginUser === undefined) {
                // window.location.reload();
                // window.location.href = 'http://localhost:5173/login';
            }
        }, 700);
        return () => clearTimeout(delay);
    }, [currentLoginUser]);

    return (
        <div className='search-page-container'>

            <SearchPageTop SearchedTerm={search} />

            <div className='search-page-body'>
                <SearchPageProvider>
                    <SearchPageSide />
                    <SearchPageMain />
                </SearchPageProvider>
            </div>
        </div>
    );
};

export default SearchPage;
