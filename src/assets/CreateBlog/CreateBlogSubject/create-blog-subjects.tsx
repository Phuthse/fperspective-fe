import React, { useState, useRef, useEffect } from "react";
import "./create-blog-Subjects.css";
import Subject from "../../../model/subject";
import { subjectApi } from "../../../config/axios";

interface CreateBlogSubjectsProps {
    setSubjects: (Subjects: Subject[]) => void;
    uri: string;
}

const CreateBlogSubjects: React.FC<CreateBlogSubjectsProps> = ({ setSubjects, uri }) => {

    const [bSubjects, setBSubjects] = useState<Subject[]>([]);
    const fetchBTagData = async () => {
        const response = await subjectApi.get(uri, { withCredentials: true });
        setBSubjects(response.data);
    };
    useEffect(() => {
        fetchBTagData();
    }, [uri]);

    const [Subjects, setSubjectsState] = useState<Subject[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    const [placeholder, setPlaceholder] = useState<string>("Add up to 2 Subjects...");
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const options: Subject[] = [];

    bSubjects.map((btag) => {
        options.push(btag)
    })

    const inputRef = useRef<HTMLInputElement | null>(null);
    const optionsRef = useRef<HTMLUListElement | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
    };

    const handleOptionClick = (options: Subject) => {
        if (Subjects.length < 2 && !Subjects.includes(options)) {
            const updatedSubjects = [...Subjects, options];
            setSubjects(updatedSubjects);
            setSubjectsState(updatedSubjects);
            setInputValue("");
            if (Subjects.length === 1) {
                setPlaceholder("Max Subjects reached");
            } else if (Subjects.length >= 0) {
                setPlaceholder("Add another subject...");
            }
        }
        hideOptions();
    };

    const handleTagRemove = (tagToRemove: Subject) => {
        const updatedSubjects = Subjects.filter((tag) => tag !== tagToRemove);
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
                {Subjects.map((subject) => (
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
                        <>
                            <ul className="subject-options" ref={optionsRef}>
                                {options
                                    .filter((option) => !Subjects.includes(option))
                                    .map((option) => (
                                        <li key={option.subjectId} onClick={() => handleOptionClick(option)}>
                                            {option.subjectName}
                                        </li>
                                    ))}
                            </ul>
                        </>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default CreateBlogSubjects;
