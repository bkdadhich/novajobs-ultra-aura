import React from "react";
import './CourseDetail.css'

const CourseDetail = ({ course }) => {
  return (
    <>
    <h1 className=" text-5xl font-bold text-left px-5 py-5">Explore Popular Courses</h1>
      <div className=" border-2 border-white px-5 py-5 bg-white text-black md:grid md:grid-cols-3 gap-3 ">
        
        {course.map((card, index) => (
          <div key={index}>
            <div className=" flex flex-col gap-4 border-2 px-2 py-4 rounded-xl border-white shadow-md shadow-slate-400 " id='cardcourse'>
              <img src={card.img} className=" h-50 w-50" />
              <div className=" flex gap-2 justify-between">
                <img src={card.icon} />
                <p className=" text-2xl font-bold">{card.title}</p>
              </div>
              <div className=" flex justify-around text-slate-500">
                <p><i className="fa-solid fa-play border-2 rounded-full px-2 py-1 text-orange-600 bg-orange-200 border-orange-200"></i>{card.classes} Classes</p>
                <p><i className="fa-solid fa-user border-2 rounded-full px-2 py-1 text-orange-600 bg-orange-200 border-orange-200"></i>{card.students} Students</p>
                <p><i className="fa-solid fa-star text-orange-600 "></i>{card.rating}</p>
              </div>
              <div className=" flex justify-around">
                <div className=" font-bold">
                <button className=" border-2 px-3 py-1 bg-orange-300 text-black hover:bg-orange-600 rounded-xl">Design</button>
                <button className=" border-2 px-3 py-1 bg-orange-300 text-black hover:bg-orange-600 rounded-xl">Development</button>
                </div>
                
                <p className=" font-bold text-xl">${card.price}</p>
              </div>
            </div>
          </div>
        ))}
        
        
      </div>
      <div className=" flex justify-center">
        <button className=" px-3 py-3 bg-red-500 hover:bg-black text-white rounded-xl text-center">
            Browse All Courses
        </button>
        </div>
    </>
  );
};

export default CourseDetail;
