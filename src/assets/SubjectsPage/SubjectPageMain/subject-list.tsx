import React, { useEffect, useState } from 'react';
import SubjectItem from './subject-item';
import Subject from '../../../model/subject';
import { loginApi, subjectApi } from '../../../config/axios';
import User from '../../../model/user';
import SubjectItemAdmin from './subject-item-admin';

type SubjectListProps = {
    uri: string;
}

const SubjectList: React.FC<SubjectListProps> = ({ uri }) => {

    const [subjects, setSubjects] = useState<Subject[]>();
    const fetchUserData = async () => {
        const response = await subjectApi.get(uri, { withCredentials: true });
        setSubjects(response.data);
    };
    useEffect(() => {
        fetchUserData();
    }, [subjectApi]);

    const [loginUser, setLoginUser] = useState<User>();
    const fetchLoginData = async () => {
        const response = await loginApi.get('/currentUser', { withCredentials: true });
        setLoginUser(response.data);
    };
    useEffect(() => {
        fetchLoginData();
    }, [loginApi]);

    console.log("LOGIN USER: " + loginUser?.role);

    if (loginUser?.role === 'ROLE_ADMIN') {
        return (
            <div className='subject-page-body'>
                <div className='subject-page-container'>
                    {subjects?.map((subject) => {
                        return (
                            <SubjectItem
                                subjects={subject}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }
    else {
        return (
            <div className='subject-page-body'>
                <div className='admin-subject-page-container'>
                    {subjects?.map((subject) => {
                        return (
                            <SubjectItemAdmin
                                subjects={subject}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }

};
export default SubjectList;
