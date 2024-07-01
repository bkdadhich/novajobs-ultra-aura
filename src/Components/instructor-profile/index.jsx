
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import InstructorPortfolioArea from "./instructor-portfolio-area";

const InstructorProfile = () => {
  return (
    <>
    <Breadcrumb title="Instructor Profile" isDbbl="Instructor" subtitle="Instructor Profile" />
      <InstructorPortfolioArea />
      <CounterArea />
    </>
  );
};

export default InstructorProfile;
