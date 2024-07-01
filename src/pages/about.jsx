import React from "react";
import SEO from "../common/seo";
import About from "../components/about";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"About"} />
      <About />
    </WrapperFour>
  );
};

export default index;
