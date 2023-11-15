import React, { useEffect, useState } from 'react';
import './search-page.css';
import { SearchPageProvider } from './search-page-context';
import SearchPageTop from './SearchPageTop/search-page-top';
import SearchPageSide from './SearchPageSide/search-page-side';
import SearchPageMain from './SearchPageMain/search-page-main';
import { useParams } from 'react-router';
import { loginApi } from '../../config/axios';
import User from '../../model/user';

const SearchPage: React.FC = () => {

    const { searchText } = useParams();

    const search = searchText as string;

    /* REDIRECT TO LOGIN PAGE IF NOT LOGGED IN */
    const [, setCurrentLoginUser] = useState<User>();
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
