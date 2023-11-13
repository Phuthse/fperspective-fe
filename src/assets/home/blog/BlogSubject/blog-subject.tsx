import React, { useEffect, useState } from 'react';
import './blog-subject.css';
import Subject from '../../../../model/subject';
import { Link } from 'react-router-dom';
import { subjectApi } from '../../../../config/axios';
import { getSemester } from '../../../SubjectsPage/get-semester';

type BlogSubjectProps = {
    uri: string;
}


const BlogSubject: React.FC<BlogSubjectProps> = ({ uri }) => {

    const subjectProp: Subject = {
        subjectId: "",
        subjectName: "",
        status: false
    }

    const [subject, setSubject] = useState<Subject>(subjectProp);
    const fetchTagData = async () => {
        const response = await subjectApi.get(uri, { withCredentials: true });
        setSubject(response.data);
    };
    useEffect(() => {
        fetchTagData();
    }, [uri]);

    const Semester = getSemester(subject.subjectName);
    const SemesterColors = [
        'lightgreen',     // Semester 1
        'khaki',          // Semester 2
        'tan',            // Semester 3
        'lightcoral',     // Semester 4
        'dodgerblue',     // Semester 5
        'mediumorchid',   // Semester 6
        'saddlebrown',    // Semester 7
        'lightgray',      // Semester 8
        'orangered',      // Semester 9
    ];

    const SemesterColor = SemesterColors[Semester - 1];

    if (subject.status === true) {
        return (
            <>
                <Link
                    to={`/subject/${subject.subjectName}`}
                    key={subject.subjectId}
                    className="home-page-subject"
                    style={{ color: SemesterColor }}
                >
                    {subject.subjectName}
                </Link>
            </>
        );
    }
    else {
        return null;
    }
};

export default BlogSubject;
