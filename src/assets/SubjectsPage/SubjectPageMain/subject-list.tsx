import React, { useEffect, useState } from 'react';
import SubjectItem from './subject-item';
import Subject from '../../../model/subject';
import { subjectApi } from '../../../config/axios';

type SubjectListProps = {
    uri: string;
}

const SubjectList: React.FC<SubjectListProps> = ({ uri }) => {


    const [subjects, setSubjects] = useState<Subject[]>();
    const fetchUserData = async () => {
        const response = await subjectApi.get(uri, { withCredentials: true });

        setSubjects(response.data);
        console.log(response.data);
    };
    useEffect(() => {
        fetchUserData();
    }, [subjectApi]);

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
};
export default SubjectList;
