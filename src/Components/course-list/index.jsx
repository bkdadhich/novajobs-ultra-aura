import FeatureArea from "@/src/common/feature-area";
import SuitableArea from "@/src/common/suitable-area";
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import CourseListArea from "./course-list-area";

const CourseList = () => {
  return (
    <>
      <Breadcrumb title="Course List" subtitle="Course List" isDbbl="Course" />
      <FeatureArea style_about={true} />
      <CourseListArea />
      <SuitableArea style_2={true} />
      <CounterArea />
    </>
  );
};

export default CourseList;
