import React from 'react'

function WhyChooseUsComp() {
  return (
    <>
     <div className=' bg-white py-9'>
        <div className=' flex flex-col gap-3 md:flex-row md:gap-40 px-6 align-middle'>
            <div>
                <img src="https://e-pora-next.vercel.app/assets/img/bg/choose-img-01.jpg"/>
            </div>
            <div className=''>
                <div className=' flex flex-col gap-4 py-28'>
                   <p className=' text-orange-600 text-center text-xl'>Why Choose Us</p>
                   <h1 className=' text-5xl font-bold'>Why You Choose Our E-Pora Online learning</h1>
                   <p className=' text-slate-600'>Dramatically supply transparent deliverables before & can backward comp internal or "organic" sources.</p>
                   <p className=' font-bold text-black'><i className="fa-solid fa-check border-2 px-3 py-3 rounded-full bg-green-800 text-white hover:bg-orange-500 "></i>Increasing Your Learning Skills</p>
                   <p className=' font-bold text-black'><i className="fa-solid fa-check border-2 px-3 py-3 rounded-full bg-green-800 text-white hover:bg-orange-500"></i>High Quality Video & Audio Classes</p>
                   <p className=' font-bold text-black'><i className="fa-solid fa-check border-2 px-3 py-3 rounded-full bg-green-800 text-white hover:bg-orange-500"></i>Finish Your Course, Get Certificate</p>
                   <button className=' px-3 py-3 bg-red-500 text-white'>
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
