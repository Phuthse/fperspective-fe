import React from 'react';
import './deleted-subject-item.css';
import Subject from '../../../model/subject';
import { subjectApi } from '../../../config/axios';

type subjectsPageAdminProp = {
    subjects: Subject;
}

const DeletedSubjectItem: React.FC<subjectsPageAdminProp> = ({ subjects }) => {

    const HandleEnable = () => {
        subjectApi
            .delete(`/enable/${subjects.subjectId}`, { withCredentials: true })
            .then((response) => {
                window.location.href = "http://localhost:5173/tag-page";
                console.log("subject enabled:", response.data);
            })
            .catch((error) => {
                console.error("Error enabling subject: ", error);
            });
    };

    return (
        <div className="admin-deleted-subject-page-content">
            <div className='admin-deleted-subject-name-num'>
                <h3>
                    <span key={subjects.subjectId}>
                        {subjects.subjectName}
                    </span>
                </h3>
            </div>
            <button className='admin-deleted-subject-enable' onClick={HandleEnable}>Enable</button>
        </div>
    );
};

export default DeletedSubjectItem;
