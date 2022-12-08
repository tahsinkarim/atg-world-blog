import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import EducationCard from "../EducationCard/EducationCard";
import JobCard from "../JobCard/JobCard";
import MeetupCard from "../MeetupCard/MeetupCard";

const ArticleSection = () => {
  return (
    <div className='mt-4 mb-5 col-12 col-lg-8'>
      <ArticleCard></ArticleCard>
      <EducationCard></EducationCard>
      <MeetupCard></MeetupCard>
      <JobCard></JobCard>
    </div>
  );
};

export default ArticleSection;
