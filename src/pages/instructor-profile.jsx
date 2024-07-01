import InstructorProfile from "@/src/components/instructor-profile";
import React from "react";
import SEO from "../common/seo";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Instructor Profile"} />
      <InstructorProfile />
    </WrapperFour>
  );
};

export default index;
