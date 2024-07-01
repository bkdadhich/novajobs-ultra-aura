import React from "react";
import SEO from "../common/seo";
import CourseGrid from "../components/course-grid";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Course Grid"} />
      <CourseGrid />
    </WrapperFour>
  );
};

export default index;
