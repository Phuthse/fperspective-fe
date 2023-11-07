import React, { useEffect, useState } from 'react';
import { subjectApi } from '../../../config/axios';
import DeletedSubjectItem from './deleted-subject-item';
import Subject from '../../../model/subject';

type subjectsPageMain = {
    uri: string;
}

const DeletedSubjectsList: React.FC<subjectsPageMain> = ({ uri }) => {

    const [subjects, setSubjects] = useState<Subject[]>([]);

    const fetchUserData = async () => {
        const response = await subjectApi.get(uri, { withCredentials: true });
        setSubjects(response.data);
        console.log(response.data);
    };

    useEffect(() => {
        fetchUserData();
    }, [subjectApi]);

    const disabledSubjects = subjects.filter(subjects => subjects.status === false);
    const disabledSubjectsCount = disabledSubjects.length;

    return (
        <>
            <h1 className='subject-page-disable-subject-header'>All Disabled Subjects ({disabledSubjectsCount})</h1>
            <div className='subjects-page-body'>
                <div className='deleted-subjects-page-container'>
                    {disabledSubjects.map(subject => (
                        <DeletedSubjectItem subjects={subject} key={subject.subjectId} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default DeletedSubjectsList;
