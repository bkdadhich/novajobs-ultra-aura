import React from 'react'
import './Whychoose.css'
import '../Home_part/HomeFirstPart.css'

function WhyChooseUsComp() {
  return (
    <>
     
        <div className='bg-white  py-9 px-1 md:px-32'>
  <div className='flex flex-col gap-3 md:flex-row md:gap-40 px-6 align-middle relative'>
    <div className='relative '>
      <img src="https://e-pora-next.vercel.app/assets/img/bg/choose-img-01.jpg" alt="Choose" className=' h-auto w-full object-cover'/>
      <div className='top border-2 px-4 py-6 font-semibold shadow-md shadow-slate-400 hidden md:block'>
       <span className='border-2 rounded-full px-4 py-5 bg-green-600 border-green-600'>23+</span>  
        <br/>
        <br/>Years of Experience
      </div>
      <div className='bottom border-2 px-4 py-4 font-semibold shadow-md shadow-slate-400 hidden md:block'>
      <i className="fa-solid fa-check px-5 py-4 border-2 border-orange-400 rounded-full bg-orange-400"></i>
      <br/>
        <br/>
        Fully Safe and Secure.
      </div>
    </div>
    <div className=' md:w-[35%]' id='iocnsdiv'>
      <div className='flex flex-col gap-2 py-5 md:py-28'>
        <p className=' text-left font-semibold text-xl' id='spanele'>Why Choose Us</p>
        <h1 className='md:text-5xl text-3xl font-bold'>Why You Choose Our E-Pora Online learning</h1>
        <p className='text-slate-600'>Dramatically supply transparent deliverables before & can backward comp internal or "organic" sources.</p>
        <p className='font-semibold text-black '><i className="fa-solid fa-check border-2 px-3 py-3 rounded-full  text-white hover:bg-orange-500 m-2 "></i>Increasing Your Learning Skills</p>
        <p className='font-semibold text-black'><i className="fa-solid fa-check border-2 px-3 py-3 rounded-full  text-white hover:bg-orange-500 m-2"></i>High Quality Video & Audio Classes</p>
        <p className='font-semibold text-black'><i className="fa-solid fa-check border-2 px-3 py-3 rounded-full  text-white hover:bg-orange-500 m-2"></i>Finish Your Course, Get Certificate</p>
        <button className='px-3 py-3 md:w-[40%] rounded-lg font-semibold  text-white' id="btnhome">
          Explore Courses
        </button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default WhyChooseUsComp
