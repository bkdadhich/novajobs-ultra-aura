import { animationCreate } from "@/utils/utils";
import React, {useEffect} from "react";
import BackToTop from "../lib/BackToTop";
import Footer from "./footers/footer";
import Header from "./headers/header";

const WrapperThree = ({ children }) => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 500);
  },[])


  return (
    <>
      <Header />
      {children}
      <Footer />
      <BackToTop />
    </>
  );
};

export default WrapperThree;
