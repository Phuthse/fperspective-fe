import React, { useEffect, useState } from 'react';
import './subject-item.css';
import Subject from '../../../model/subject';
import { Link } from 'react-router-dom';
import { subjectApi } from '../../../config/axios';
import { getSemester } from '../get-semester';

type SubjectItemProps = {
    subjects: Subject;
}

const SubjectItem: React.FC<SubjectItemProps> = ({ subjects }) => {
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
    const fetchTagData = async () => {
        const response = await subjectApi.get(`/count/${subjects.subjectName}`, { withCredentials: true });
        setCount(response.data);
    };
    useEffect(() => {
        fetchTagData();
    }, [subjectApi]);

    return (
        <div className="subject-page-content">
            <div className='subject-name-num'>
                <h3>
                    <Link
                        to={`/subject/${subjects.subjectName}`}
                        key={subjects.subjectId}
                        style={{ color: SemesterColor }}
                    >
                        {subjects.subjectName}
                    </Link>
                </h3>
                <h4>
                    {count} posts
                </h4>
            </div>
            <span style={{ color: SemesterColor }} className="semester-number">Semester {Semester}</span>
        </div>
    );
};

export default SubjectItem;
