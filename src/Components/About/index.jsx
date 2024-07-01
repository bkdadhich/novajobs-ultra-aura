import React from "react";
import FeatureArea from "../../common/feature-area";
import AboutArea from "../../common/about-area";
import BrandArea from "@/src/common/brand-area";
import VideoArea from "../../common/video-area";
import ChooseArea from "../../common/choose-area";
import TestimonialAreaThree from "../../common/testimonial-area-2";
import InstructorArea from "./instructor-area";
import SuitableArea from "@/src/common/suitable-area";
import CounterArea from "../homes/home-3/counter-area";
import Breadcrumb from "../bredcrumb/breadcrumb";

const About = () => {
  return (
    <>
      <Breadcrumb title="About Us" subtitle="About Us" isDbbl="Pages"  />
      <FeatureArea style_about={true} />
      <AboutArea style_about={true} />
      <BrandArea style_about={true} />
      <VideoArea style_2={true} />
      <ChooseArea style_about={true} />
      <TestimonialAreaThree style_about={true} />
      <InstructorArea />
      <SuitableArea style_2={true} />
      <CounterArea />
    </>
  );
};

export default About;
