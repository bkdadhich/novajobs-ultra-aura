import React from "react";
import SEO from "../common/seo";
import Contact from "../components/contact";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Contact"} />
      <Contact />
    </WrapperFour>
  );
};

export default index;
