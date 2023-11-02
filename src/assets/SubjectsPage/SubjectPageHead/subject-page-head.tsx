import React from 'react';
import './subject-page-head.css';

type SubjectPageHeaderProp = {
    NumberOfSubject: number;
}


const SubjectPageHeader: React.FC<SubjectPageHeaderProp> = ({ NumberOfSubject }) => {
    return (

        <header className='subject-page-header'>
            <h1>All Subject ({NumberOfSubject})</h1>
        </header>
    );
};
export default SubjectPageHeader;
