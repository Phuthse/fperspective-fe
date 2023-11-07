import Subject from "../../../../model/subject";
import BlogSubject from "./blog-subject";

type SubjectListProps = {
    subjectList?: Subject[];
};

const PostSubjectList: React.FC<SubjectListProps> = ({ subjectList }) => {
    return (
        <div className="home-page-post-subject">
            {subjectList
                ? subjectList
                    .filter((subject) => subject.status)
                    .map((subject) => (
                        <BlogSubject key={subject.subjectId} subject={subject} />
                    ))
                : <p />
            }
        </div>
    );
};

export default PostSubjectList;
