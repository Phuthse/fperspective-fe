import React, { useEffect, useState } from "react";
import "./main-subject.css";
import { subjectApi } from "../../../../config/axios";
import { Link } from "react-router-dom";
import Subject from "../../../../model/subject";

type SearchPageMainTagProp = {
    subject: Subject;
    uri: string;
};

const SearchPageMainSubject: React.FC<SearchPageMainTagProp> = ({ subject, uri }) => {

    const [count, setCount] = useState<number>(1);
    const fetchUserData = async () => {
        const response = await subjectApi.get(uri, { withCredentials: true });
        setCount(response.data);
    };
    useEffect(() => {
        fetchUserData();
    }, [subjectApi]);

    return (
        <div className="search-page-main-subject">
            <span>#</span>
            <div className="search-page-main-subject-detail">
                <h2>
                    <Link
                        to={`/subject/${subject.subjectName}`}
                        key={subject.subjectId}
                    >
                        {subject.subjectName}
                    </Link>
                </h2>
                <p>{count} posts</p>
            </div>
        </div>
    );
};

export default SearchPageMainSubject;
