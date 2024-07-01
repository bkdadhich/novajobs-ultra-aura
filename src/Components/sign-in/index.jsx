
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import LoginForm from "../form/login-form";

const SignIn = () => {
  return (
    <>
    <Breadcrumb title="Log In" subtitle="Login" isDbbl="Pages" />
      <LoginForm />
    </>
  );
};

export default SignIn;
