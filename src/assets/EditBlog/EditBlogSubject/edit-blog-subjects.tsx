import React, { useState, useRef, useEffect } from "react";
import "./edit-blog-subjects.css";
import Subject from "../../../model/subject";
import { subjectApi } from "../../../config/axios";

interface CreateBlogSubjectsProps {
    setSubjects: (subjects: Subject[]) => void;
    uri: string;
    currentSubject: Subject[];
}

const EditBlogSubjects: React.FC<CreateBlogSubjectsProps> = ({ setSubjects, uri, currentSubject }) => {

    const [bSubjects, setBSubjects] = useState<Subject[]>([]);

    const [filteredOptions, setFilteredOptions] = useState<Subject[]>([]);
    const fetchBTagData = async () => {
        const response = await subjectApi.get(uri, { withCredentials: true });
        setBSubjects(response.data);
        setFilteredOptions(response.data);
    };

    useEffect(() => {
        fetchBTagData();
    }, [uri]);

    const [subjects, setSubjectsState] = useState<Subject[]>(currentSubject);
    const [inputValue, setInputValue] = useState<string>("");
    const [placeholder, setPlaceholder] = useState<string>("Add up to 2 Subjects...");
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement | null>(null);
    const optionsRef = useRef<HTMLUListElement | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);

        // Filter the options based on the input value
        const filtered = bSubjects.filter(option => option.subjectName.toLowerCase().includes(value.toLowerCase()));
        setFilteredOptions(filtered);
    };

    const handleOptionClick = (option: Subject) => {
        if (subjects.length < 2 && !subjects.includes(option)) {
            const updatedSubjects = [...subjects, option];
            setSubjects(updatedSubjects);
            setSubjectsState(updatedSubjects);
            setInputValue("");
            if (subjects.length === 1) {
                setPlaceholder("Max Subjects reached");
            } else if (subjects.length >= 0) {
                setPlaceholder("Add another subject...");
            }
            hideOptions();
        }
    };

    const handleTagRemove = (subjectToRemove: Subject) => {
        const updatedSubjects = subjects.filter(subject => subject !== subjectToRemove);
        setSubjects(updatedSubjects);
        setSubjectsState(updatedSubjects);
    };

    const showOptionsOnInputClick = () => {
        setShowOptions(true);
    };

    const hideOptions = () => {
        setShowOptions(false);
    };

    useEffect(() => {
        // Add a click event listener to the document to hide options when clicking outside
        const handleDocumentClick = (event: MouseEvent) => {
            if (
                inputRef.current &&
                optionsRef.current &&
                !inputRef.current.contains(event.target as Node) &&
                !optionsRef.current.contains(event.target as Node)
            ) {
                hideOptions();
            }
        };

        document.addEventListener("click", handleDocumentClick);

        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    return (
        <div className="post-subjects">
            <ul className="current-subjects">
                {subjects.map((subject) => (
                    <li key={subject.subjectId}>
                        {subject.subjectName}
                        <button onClick={() => handleTagRemove(subject)}>X</button>
                    </li>
                ))}
                <li>
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={handleInputChange}
                        onClick={showOptionsOnInputClick}
                        ref={inputRef}
                    />
                    {showOptions && (
                        <ul className="subject-options" ref={optionsRef}>
                            {filteredOptions
                                .filter((option) => option.status === true && !subjects.includes(option))
                                .map((option) => (
                                    <li key={option.subjectId} onClick={() => handleOptionClick(option)}>
                                        {option.subjectName}
                                    </li>
                                ))}
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default EditBlogSubjects;
