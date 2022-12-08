import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import EducationCard from "../EducationCard/EducationCard";
import MeetupCard from "../MeetupCard/MeetupCard";

const ArticleSection = () => {
  return (
    <div>
      <ArticleCard></ArticleCard>
      <EducationCard></EducationCard>
      <MeetupCard></MeetupCard>
    </div>
  );
};

export default ArticleSection;
