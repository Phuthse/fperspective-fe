import { useState, useEffect } from "react";
import { subjectApi } from "../../../../config/axios";
import SearchPageMainSubject from "./main-subject";
import Subject from "../../../../model/subject";

type MainSubjectListProp = {
    uri: string;
};

const MainSubjectList: React.FC<MainSubjectListProp> = ({ uri }) => {

    const [subjects, setSubjects] = useState<Subject[]>([]);

    const fetchTagData = async () => {
        const response = await subjectApi.get(uri, { withCredentials: true });
        setSubjects(response.data);
    };

    useEffect(() => {
        fetchTagData();
    }, [uri]);

    if (subjects.length === 0) {
        return (
            <section style={{ color: "white" }}>
                <h1
                    style={{ padding: '15px' }}
                >No subjects found</h1>
            </section>
        );
    }

    return (
        <>
            {subjects.map((subject) => {
                return (
                    <SearchPageMainSubject key={subject.subjectId} subject={subject} uri={`/count/${subject.subjectName}`} />
                );
            })}
        </>
    );
};

export default MainSubjectList;
