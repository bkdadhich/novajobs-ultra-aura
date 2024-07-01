import React from "react";
import SEO from "../common/seo";
import CourseList from "../components/course-list";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Course List"} />
      <CourseList />
    </WrapperFour>
  );
};

export default index;
