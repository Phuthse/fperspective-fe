import React from 'react';
import './subject.item.css';
import FollowButton from '../../home/button/FollowButton/follow-button';
import Subject from '../../../model/subject';

type SubjectItemProps = {
    subjects: Subject;
}

const SubjectItem: React.FC<SubjectItemProps> = ({ subjects }) => {
    return (

        <div className="subject-page-content">

            <div className='subject-name-num'>
                <h3>
                    <a href='#'>#{subjects.subjectName}</a>
                </h3>
                <h4>
                    10k posts
                </h4>
            </div>
            <FollowButton />

        </div>

    );
};
export default SubjectItem;
