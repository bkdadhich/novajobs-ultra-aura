import React from 'react';
import './About.css';
import '../Home_part/HomeFirstPart.css'


const AboutOurCourses = () => {
  return (
    <div className="bg-white text-black py-9 ">
      <div className="">
        <div className="flex flex-col md:flex-row gap-2 md:gap-10 px-3  md:px-28">
          
          
          <div className="relative px-10 py-9">
      <img
        src="https://e-pora-next.vercel.app/assets/img/about/about-img.png"
        alt="Student"
        className="h-auto w-full object-cover"
      />
      <div className=" hidden md:block absolute top-1/4 left-2/4 transform -translate-x-0.5 -translate-y-1/2">
        <img
          src="https://e-pora-next.vercel.app/assets/img/about/about-shape-01.png"
          alt="Student with Globe"
          className="object-cover h-auto w-full "
        />
      </div>
      
      <div className=" hidden md:block absolute -left-1 top-2/4">
        <img
          src="https://e-pora-next.vercel.app/assets/img/about/about-shape-04.png"
          alt="Student with Globe"
          className="object-cover h-auto w-full "
        />
      </div>
      <div className=" hidden md:block absolute -top-2 right-0">
        <img
          src="https://e-pora-next.vercel.app/assets/img/about/about-shape-05.png"
          alt="Student with Globe"
          className="object-cover h-auto w-full "
        />
      </div>
      <div className="hidden md:block absolute left-[80%] -right-10 bottom-48">
        <img
          src="https://e-pora-next.vercel.app/assets/img/about/about-shape-02.png"
          alt="Female Student"
          className="object-cover h-auto w-full"
        />
      </div>
      
    </div>

    

          <div className=" flex flex-col gap-5 md:w-[45%] md:py-36">
            <h2 className="text-2xl text-center font-semibold  mb-4" id="spanele">
              About Our Courses
            </h2>
            <h1 className=' font-bold text-5xl px-3'>Explore Thousands of Creative Classes</h1>
            <p className="text-gray-600 mb-8 px-3">
              Dramatically supply transparent deliverables beforese backward comp
              internal or "organic" sources. Comp transparent leverage other.
            </p>
            <button className=" text-white py-5 px-4 rounded-md md:w-[30%]" id='btnhome'>
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurCourses;