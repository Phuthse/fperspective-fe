import { useState, useEffect } from "react";
import { subjectApi } from "../../../../config/axios";
import Subject from "../../../../model/subject";
import BlogSubject from "./blog-subject";

type SubjectListProps = {
    uri: string;
};

const PostSubjectList: React.FC<SubjectListProps> = ({ uri }) => {

    const [subjects, setSubjects] = useState<Subject[]>([]);

    const fetchTagData = async () => {
        const response = await subjectApi.get(uri, { withCredentials: true });
        setSubjects(response.data);
    };

    useEffect(() => {
        fetchTagData();
    }, [uri]);

    return (
        <div className="home-page-post-subject">
            {subjects
                ? subjects
                    .map((subject) => {
                        return <BlogSubject key={subject.subjectId} uri={`/show/${subject.subjectId}`} />;
                    })
                : <p />
            }
        </div>
    );
};

export default PostSubjectList;
