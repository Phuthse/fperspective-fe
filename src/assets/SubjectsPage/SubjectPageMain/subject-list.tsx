import React, { useEffect, useState } from 'react';
import SubjectItem from './subject-item';
import Subject from '../../../model/subject';
import { loginApi, subjectApi } from '../../../config/axios';
import User from '../../../model/user';
import SubjectItemAdmin from './subject-item-admin';

type SubjectListProps = {
    uri: string;
}

const SubjectList: React.FC<SubjectListProps> = ({ uri }) => {

    const [subjects, setSubjects] = useState<Subject[]>([]);
    const fetchUserData = async () => {
        const response = await subjectApi.get(uri, { withCredentials: true });
        setSubjects(response.data);
    };
    useEffect(() => {
        fetchUserData();
    }, [subjectApi]);

    const [loginUser, setLoginUser] = useState<User>();
    const fetchLoginData = async () => {
        const response = await loginApi.get('/currentUser', { withCredentials: true });
        setLoginUser(response.data);
    };
    useEffect(() => {
        fetchLoginData();
    }, [loginApi]);

    /* SUBJECT CREATION METHODS */

    const [subjectName, setSubjectName] = useState("");
    const [status] = useState(true);

    const handleCreate = () => {
        // Ensure subjectName is converted to uppercase
        const upperCaseSubjectName = subjectName.toUpperCase();

        // Create a data object to send to the backend
        const subjectData = {
            subjectName: upperCaseSubjectName,
            status
        };

        // Send a POST request to your backend
        subjectApi
            .post(`/show`, subjectData, { withCredentials: true })
            .then((response) => {
                console.log(subjectData);
                window.location.href = "http://localhost:5173";
                console.log("subject created:", response.data);
            })
            .catch((error) => {
                console.log(subjectData);
                console.error("Error creating subject: ", error);
            });
    };

    const handleSubjectNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubjectName(event.target.value);
    };

    if (loginUser?.role === 'ROLE_USER') {
        return (
            <div className='subject-page-body'>
                <div className='subject-page-container'>
                    {subjects
                        .filter(subject => subject.status === true)
                        .map((subject) => {
                            return (
                                <SubjectItem
                                    subjects={subject}
                                />
                            );
                        })}
                </div>
            </div>
        );
    } else {
        return (
            <div className='subject-page-body'>
                <div className='admin-subject-page-container'>
                    {subjects
                        .filter(subject => subject.status === true)
                        .map((subject) => {
                            return (
                                <SubjectItemAdmin
                                    subjects={subject}
                                />
                            );
                        })}
                    <form className="create-subject-form">
                        <input
                            placeholder="Enter subject name"
                            value={subjectName}
                            onChange={handleSubjectNameChange}
                        />
                        <div className="create-subject-form-footer">
                            <button
                                className='create-subject-button'
                                onClick={handleCreate}
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }


};
export default SubjectList;
