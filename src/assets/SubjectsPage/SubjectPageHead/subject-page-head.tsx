import React, { useEffect, useState } from 'react';
import './subject-page-head.css';
import { subjectApi } from '../../../config/axios';
import Subject from '../../../model/subject';

type SubjectPageHeaderProp = {
    uri: string;
}


const SubjectPageHeader: React.FC<SubjectPageHeaderProp> = ({ uri }) => {

    const [subjects, setSubjects] = useState<Subject[]>();
    const fetchUserData = async () => {
        const response = await subjectApi.get(uri, { withCredentials: true });

        setSubjects(response.data);
        console.log(response.data);
    };
    useEffect(() => {
        fetchUserData();
    }, [subjectApi]);

    const subjectCount = subjects ? subjects.length : 0;

    return (

        <header className='subject-page-header'>
            <h1>All Subject ({subjectCount})</h1>
        </header>
    );
};
export default SubjectPageHeader;
