import React from "react";
import './CourseDetail.css'
import '../About/About.css'
import '../Home_part/HomeFirstPart.css'

const CourseDetail = ({ course }) => {
  return (
    <>
    <div id="course">
    <h1 className=" text-3xl md:text-5xl font-bold text-left px-5 md:px-36 py-2 md:py-5">Explore Popular Courses</h1>
      <div className="  px-5 md:px-36 py-5 bg-white text-black md:grid md:grid-cols-3 gap-3 ">
        
        {course.map((card, index) => (
          <div key={index}>
            {/* <div className=" flex flex-col h-[500px] justify-between gap-4 border-2 px-2 py-4 rounded-xl border-white shadow-md shadow-slate-400 " id='cardcourse'>
              <img src={card.img} className=" w-[100%] h-[50%]" />
              <div className=" flex gap-2 ">
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
                <button className=" border-2 px-3 py-1 bg-orange-300 text-black hover:bg-orange-600 rounded-xl">{card.btn1}</button>
                <button className=" border-2 px-3 py-1 bg-orange-300 text-black hover:bg-orange-600 rounded-xl">{card.btn2}</button>
                </div>
                
                <p className=" font-bold text-xl">${card.price}</p>
              </div>
            </div> */}
            {/* <div className="flex flex-col h-[500px] justify-between gap-4 border-2 px-2 py-4 rounded-xl border-white shadow-md shadow-slate-400" id="cardcourse">
  <img src={card.img} className="w-[100%] h-[50%] rounded-xl zoomable" alt="Course" />
  <div className="flex gap-2">
    <img src={card.icon} alt="Icon" />
    <p className="text-2xl font-bold">{card.title}</p>
  </div>
  <div className="flex justify-around text-slate-500">
    <p>
      <i className="fa-solid fa-play border-2 rounded-full px-2 py-1 text-orange-600 bg-orange-200 border-orange-200"></i>
      {card.classes} Classes
    </p>
    <p>
      <i className="fa-solid fa-user border-2 rounded-full px-2 py-1 text-orange-600 bg-orange-200 border-orange-200"></i>
      {card.students} Students
    </p>
    <p>
      <i className="fa-solid fa-star text-orange-600"></i>
      {card.rating}
    </p>
  </div>
  <div className="flex justify-around">
    <div className="font-bold">
      <button className="border-2 px-3 py-1 bg-orange-300 text-black hover:bg-orange-600 rounded-xl">{card.btn1}</button>
      <button className="border-2 px-3 py-1 bg-orange-300 text-black hover:bg-orange-600 rounded-xl">{card.btn2}</button>
    </div>
    <p className="font-bold text-xl">${card.price}</p>
  </div>
</div> */}

<div className="flex flex-col h-[500px] justify-between gap-4 border-2 px-2 py-2 rounded-xl border-white shadow-md shadow-slate-400 card-container" id="cardcourse">
  <img src={card.img} className="w-full h-[300px] card-image rounded-md" alt="Course" />
  <div className="flex gap-1 items-center">
    <img src={card.icon} alt="Icon" />
    <p className="text-2xl font-bold">{card.title}</p>
  </div>
  <div className="flex justify-around text-slate-500">
    <p><i className="fa-solid fa-play border-2 rounded-full px-2 py-1  bg-orange-200 border-orange-200" id="spanele"></i>{card.classes} Classes</p>
    <p><i className="fa-solid fa-user border-2 rounded-full px-2 py-1  bg-orange-200 border-orange-200" id="spanele"></i>{card.students} Students</p>
    <p><i className="fa-solid fa-star " id="spanele"></i>{card.rating}</p>
  </div>
  <div className="flex gap-2 justify-around">
    <div className="font-bold flex gap-2" id='btncourse'>
      <button className=" px-3 py-1 bg-orange-100 text-black hover:bg-yellow-400 rounded-xl">{card.btn1}</button>
      <button className=" px-3 py-1 bg-orange-100 text-black hover:bg-yellow-400 rounded-xl">{card.btn2}</button>
    </div>
    <p className="font-bold text-xl">${card.price}</p>
  </div>
</div>


          </div>
        ))}
        
        
      </div>
      <div className=" flex justify-center">
        <button className=" px-3 py-3  hover:bg-black text-white rounded-xl text-center" id='btnhome'>
            Browse All Courses
        </button>
        </div>

        </div>
    </>
  );
};

export default CourseDetail;
