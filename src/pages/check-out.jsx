import React from "react";
import SEO from "../common/seo";
import CheckOut from "../components/check-out";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Check Out"} />
      <CheckOut />
    </WrapperFour>
  );
};

export default index;
