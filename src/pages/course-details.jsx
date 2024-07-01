import React from "react";
import SEO from "../common/seo";
import CourseDetails from "../components/course-details";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Course Details"} />
      <CourseDetails />
    </WrapperFour>
  );
};

export default index;
