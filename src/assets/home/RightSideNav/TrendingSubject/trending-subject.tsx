import React, { useEffect, useState } from 'react';
import './trending-subject.css'
import { subjectApi } from '../../../../config/axios';
import { Link } from 'react-router-dom';
import Subject from '../../../../model/subject';

type TrendingTagProps = {
    subjects: Subject;
    uri: string;
}

const getSemester = (subjectName: string) => {
    const SemesterMap: Record<string, number> = {
        'PRF192': 1,
        'CEA201': 1,
        'SSL101c': 1,
        'CSI104': 1,
        'NWC203c': 2,
        'SSG104': 2,
        'PRO192': 2,
        'MAD101': 2,
        'OSG202': 2,
        'CSD201': 3,
        'DBI202': 3,
        'LAB211': 3,
        'JPD113': 3,
        'WED201c': 3,
        'SWE201c': 4,
        'JPD123': 4,
        'IOT102': 4,
        'PRJ301': 4,
        'MAS291': 4,
        'SWR302': 5,
        'SWT301': 5,
        'SWP391': 5,
        'ITE302c': 5,
        'PRN211': 5,
        'ACC101': 5,
        'OJT202': 6,
        'ENW492c': 6,
        'PRN221': 7,
        'PRU211m': 7,
        'EXE101': 7,
        'PMG201c': 7,
        'SWD392': 7,
        'MLN122': 8,
        'MLN111': 8,
        'EXE201': 8,
        'WDU203c': 8,
        'PRN231': 8,
        'PRM392': 8,
        'MLN131': 9,
        'VNR202': 9,
        'HCM202': 9,
        'SEP490': 9,
    };

    return SemesterMap[subjectName] || 1;
};

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
                <p> {formatNumber(count)} posts </p>
            </Link>
        </div>
    );
};

export default TrendingSubject;
