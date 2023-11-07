import Subject from "../../../../model/subject";
import BlogSubject from "./blog-subject";

type SubjectListProps = {
    subjectList: Subject[]
};

const PostSubjectList: React.FC<SubjectListProps> = ({ subjectList }) => {

    return (
        <div className="home-page-post-subject">
            {subjectList
                .map((subject) => {
                    return <BlogSubject key={subject.subjectId} subject={subject} />;
                })}
        </div>
    );
};

export default PostSubjectList;
