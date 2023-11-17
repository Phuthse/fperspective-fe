import React, { useEffect, useState } from 'react';
import './trending-subject.css'
import { subjectApi } from '../../../../config/axios';
import { Link } from 'react-router-dom';
import Subject from '../../../../model/subject';
import { getSemester } from '../../../SubjectsPage/get-semester';

type TrendingTagProps = {
    subjects: Subject;
    uri: string;
}

const formatNumber = (number: number): string => {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'm';
    } else if (number >= 100000) {
        return (number / 1000).toFixed(1) + 'k';
    } else if (number >= 10000) {
        return (number / 1000).toFixed(1) + 'k';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(1) + 'k';
    }
    return number.toString();
};

const TrendingSubject: React.FC<TrendingTagProps> = ({ subjects, uri }) => {

    const Semester = getSemester(subjects.subjectName);
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

    const [count, setCount] = useState<number>(1);
    const fetchUserData = async () => {
        const response = await subjectApi.get(uri, { withCredentials: true });
        setCount(response.data);
    };
    useEffect(() => {
        fetchUserData();
    }, [subjectApi]);

    return (

        <div key={subjects.subjectId} className="trending-subject">
            <Link
                to={`/subject/${subjects.subjectName}`}
                key={subjects.subjectId}
                style={{ color: SemesterColor }}
            >
                <span> {subjects.subjectName}</span>
                <p> {formatNumber(count)} blogs </p>
            </Link>
        </div>
    );
};

export default TrendingSubject;
