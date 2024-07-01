
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CheckoutArea from "./checkout-area";
import CouponArea from "./coupon-area";

const CheckOut = () => {
  return (
    <>
    <Breadcrumb title="Checkout" subtitle="CheckOut" />
      <CouponArea />
      <CheckoutArea />
    </>
  );
};

export default CheckOut;
