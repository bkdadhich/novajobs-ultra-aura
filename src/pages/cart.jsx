import React from "react";
import SEO from "../common/seo";
import Cart from "../components/cart";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Cart"} />
      <Cart />
    </WrapperFour>
  );
};

export default index;
