import React, { useEffect, useState } from 'react';
import './subject-item-admin.css';
import Subject from '../../../model/subject';
import { blogApi, subjectApi } from '../../../config/axios';
import { Link } from 'react-router-dom';

type SubjectItemAdminProps = {
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

const SubjectItemAdmin: React.FC<SubjectItemAdminProps> = ({ subjects }) => {
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

    /* SUBJECT UPDATE AND DELETE METHOD */

    const [subjectName, setSubjectName] = useState(subjects.subjectName);
    
    // const [status] = useState(subjects.status);
    // const handleUpdate = () => {
    //     const subjectData = {
    //         subjectId: subjects.subjectId,
    //         subjectName: subjectName,
    //         status
    //     };
    //     subjectApi
    //         .post(`/update`, subjectData, { withCredentials: true })
    //         .then((response) => {
    //             console.log(subjectData);
    //             window.location.href = "http://localhost:5173/subject-page";
    //             console.log("TAG updated:", response.data);
    //         })
    //         .catch((error) => {
    //             console.log(subjectData);
    //             console.error("Error creating tag: ", error);
    //         });
    // };

    const handleDelete = () => {
        subjectApi
            .delete(`/delete/${subjects.subjectId}`, { withCredentials: true })
            .then((response) => {
                blogApi.delete(`/subject/${subjects.subjectName}`, { withCredentials: true })
                window.location.href = "http://localhost:5173/subject-page";
                console.log("TAG updated:", response.data);
            })
            .catch((error) => {
                console.error("Error creating tag: ", error);
            });
    };

    const handleSubjectNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubjectName(event.target.value);
    };

    const [count, setCount] = useState<number>(1);
    const fetchUserData = async () => {
        const response = await subjectApi.get("count/" + subjects.subjectName, { withCredentials: true });
        setCount(response.data);
    };
    useEffect(() => {
        fetchUserData();
    }, [subjectApi]);

    return (
        <div className="admin-subject-page-content">
            <div className='admin-subject-name-num'>
                <h3>
                    <input
                        value={subjectName}
                        style={{ color: SemesterColor }}
                        onChange={handleSubjectNameChange}
                    />
                </h3>
                <Link
                    to={`/subject/${subjects.subjectName}`}
                    key={subjects.subjectId}
                >
                    <h4>{count} posts</h4>
                </Link>
            </div>
            <div className="admin-subject-button">
                {/* <button className='admin-subject-update' onClick={handleUpdate}>Update</button> */}
                <button className='admin-subject-delete' onClick={handleDelete}>Disable</button>
            </div>
        </div>
    );
};

export default SubjectItemAdmin;
