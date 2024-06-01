import React from 'react'
import CourseDetail from './CourseDetail';


function Course(props) {
  const course =[
    {
        img:"https://e-pora-next.vercel.app/assets/img/course/course-thumb-01.jpg",icon:"https://e-pora-next.vercel.app/assets/img/icon/course-avata-01.png",title:"The Complete 2022 Web Development Camp",classes:"35",students:"291",price:"29.99",rating:"4.7"
    },
    { img:"https://e-pora-next.vercel.app/assets/img/course/course-thumb-02.jpg",icon:"https://e-pora-next.vercel.app/assets/img/icon/course-avata-02.png",title:"Complete Web Design from Figma to Webflow",classes:"40",students:"300",price:"30.00",rating:"4.7"},
    { img:"https://e-pora-next.vercel.app/assets/img/course/course-thumb-03.jpg",icon:"https://e-pora-next.vercel.app/assets/img/icon/course-avata-03.png",title:"SEO: Structured Data Markup for Web Masters",classes:"30",students:"400",price:"25.00",rating:"4.7"},
    { img:"https://e-pora-next.vercel.app/assets/img/course/course-thumb-04.jpg",icon:"https://e-pora-next.vercel.app/assets/img/icon/course-avata-04.png",title:"Complete Web Design from Figma Freelancing",classes:"28",students:"200",price:"20.00",rating:"4.7"},
    { img:"https://e-pora-next.vercel.app/assets/img/course/course-thumb-05.jpg",icon:"https://e-pora-next.vercel.app/assets/img/icon/course-avata-05.png",title:"Dreamweaver - Coding your first website using",classes:"28",students:"200",price:"20.00",rating:"4.7"},
    { img:"https://e-pora-next.vercel.app/assets/img/course/course-thumb-06.jpg",icon:"https://e-pora-next.vercel.app/assets/img/icon/course-avata-06.png",title:"How to Write Great Web Content - Better Search!",classes:"28",students:"200",price:"20.00",rating:"4.7"},
  ];
  return (
    <>
      <CourseDetail course={course}/>
    </>
  )
}

export default Course
