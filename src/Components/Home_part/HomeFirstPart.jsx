import React from 'react'
import './HomeFirstPart.css'

function HomeFirstPart() {
  return (
    <>
      <div className='px-4 md:px-12 py-4' id='homefirstpart'>
        <div className=' flex flex-wrap-reverse md:flex-nowrap justify-around px-2 md:px-7'>
            <div className=' flex flex-col gap-3  text-left text-white md:w-[40%]  justify-center'>
              <div className=' text-xl md:text-3xl'>Learn New Skills & Popular Courses</div>
              <div className=' text-3xl md:text-5xl font-bold'>For Every Student, Every <span id="spanele">Classroom</span>. </div>
              <div className=' text-xl md:text-2xl'>Dramatically supply transparent deliverables before backwardcomp internal or "organic" sources. Competently leverage other.</div>
              <div>
                <button className=' px-3 py-3   text-white font-medium rounded-xl' id="btnhome">Explore Courses</button>
              </div>
            </div>
            <div>
              <img src="https://e-pora-next.vercel.app/assets/img/banner/banner-shape-01.png" className=' h-full w-full'/>
            </div>
        </div>
      </div>
    </>
  )
}

export default HomeFirstPart
