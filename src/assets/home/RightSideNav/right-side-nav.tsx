import React, { useEffect, useState } from "react";
import "./right-side-nav.css";
import TrendingTag from "./Trending/trending";
//import WhoToFollow from "./WhoToFollow/who-to-follow";
import { subjectApi, tagApi } from "../../../config/axios";
import Tag from "../../../model/tag";
import Subject from "../../../model/subject";
import TrendingSubject from "./TrendingSubject/trending-subject";

type RightSideNavProps = {
  tagUri: string;
  subjectUri: string;
  userUri: string;
  currentUser: string;
};

const RightSideBar: React.FC<RightSideNavProps> = ({ tagUri, subjectUri, /*userUri, currentUser*/ }) => {

  const [tags, setTags] = useState<Tag[]>();
  const fetchUserData = async () => {
    const response = await tagApi.get(tagUri, { withCredentials: true });
    setTags(response.data);
  };
  useEffect(() => {
    fetchUserData();
  }, [tagApi]);

  const [subjects, setSubjects] = useState<Subject[]>();
  const fetchSubjectData = async () => {
    const response = await subjectApi.get(subjectUri, { withCredentials: true });
    setSubjects(response.data);
  };
  useEffect(() => {
    fetchSubjectData();
  }, [tagApi]);

  return (
    <div className="right-sidebar">

      <div className="trending-tags">
        <h3>Popular Tags</h3>
        <div className="trending-tags">
          {tags?.map((tag) => {
            const url = "count/" + tag.tagName;
            return (
              <TrendingTag
                tags={tag}
                uri={url}
              />
            )
          })}
        </div>
      </div>

      <div className="trending-subjects">
        <h3>Popular Subjects</h3>
        <div className="trending-subjects">
          {subjects?.map((subject) => {
            const url = "count/" + subject.subjectName;
            return (
              <TrendingSubject
                subjects={subject}
                uri={url}
              />
            )
          })}
        </div>
      </div>

      {/* <WhoToFollow
        uri={userUri}
        currentUser={currentUser}
      /> */}
    </div>
  );
};
export default RightSideBar;
