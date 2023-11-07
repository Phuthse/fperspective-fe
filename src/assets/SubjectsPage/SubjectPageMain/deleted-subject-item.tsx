import React from 'react';
import './deleted-subject-item.css';
import Subject from '../../../model/subject';

type subjectsPageAdminProp = {
    subjects: Subject;
}

const DeletedSubjectItem: React.FC<subjectsPageAdminProp> = ({ subjects }) => {

    return (
        <div className="admin-deleted-subject-page-content">
            <div className='admin-deleted-subject-name-num'>
                <h3>
                    <span key={subjects.subjectId}>
                        {subjects.subjectName}
                    </span>
                </h3>
            </div>
            <button className='admin-deleted-subject-enable'>Enable</button>
        </div>
    );
};

export default DeletedSubjectItem;
