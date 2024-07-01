import React from "react";
import SEO from "../common/seo";
import FAQ from "../components/faq";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"FAQ"} />
      <FAQ />
    </WrapperFour>
  );
};

export default index;
