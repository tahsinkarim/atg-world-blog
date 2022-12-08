import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import ArticleCategories from "../ArticleCategories/ArticleCategories";
import EducationCard from "../EducationCard/EducationCard";
import JobCard from "../JobCard/JobCard";
import MeetupCard from "../MeetupCard/MeetupCard";

const ArticleSection = () => {
  return (
    <div className='mt-4 mb-5'>
      <ArticleCategories></ArticleCategories>
      <hr className='container'></hr>
      <ArticleCard></ArticleCard>
      <EducationCard></EducationCard>
      <MeetupCard></MeetupCard>
      <JobCard></JobCard>
    </div>
  );
};

export default ArticleSection;
