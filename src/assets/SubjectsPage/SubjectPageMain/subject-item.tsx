import React from 'react';
import './subject.item.css';
import FollowButton from '../../home/button/FollowButton/follow-button';
import Subject from '../../../model/subject';

type SubjectItemProps = {
    subjects: Subject;
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

    return (
        <div className="subject-page-content">
            <div className='subject-name-num'>
                <h3>
                    <a
                        href='#'
                        style={{ color: SemesterColor }}
                    >
                        {subjects.subjectName}
                    </a>
                </h3>
                <h4>
                    10k posts
                </h4>
            </div>
            <span style={{ color: SemesterColor }} className="semester-number">Semester {Semester}</span>
            <FollowButton />
        </div>
    );
};

export default SubjectItem;
