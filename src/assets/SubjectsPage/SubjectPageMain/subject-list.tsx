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
        const trimmedSubjectName = subjectName.trim();
        if (!trimmedSubjectName) {
            console.error("Tag name cannot be empty or contain only spaces.");
            // Optionally, you can set an error state or display a message to the user
            return;
        }
        const upperCaseSubjectName = subjectName.toUpperCase(); 
        
        // Trim the tagName to remove leading and trailing spaces
       
    
        // Check if the trimmedTagName is empty
        
    

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
                window.location.href = `${import.meta.env.VITE_FRONTEND_URL}`;
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
    if (!loginUser) {
        return (
            <h1 style={{ color: 'white' }}> Loading...</h1>
        );
    }
    else if (loginUser?.role === 'ROLE_USER') {
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
