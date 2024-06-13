import React from 'react'
import CardSlider from './CardSlider'
import SecondCardSlider from './SecondCardSlider'
import '../Navbar/Navbar.css'
import '../Home_part/HomeFirstPart.css'
import {Link} from 'react-router-dom'

function Instructor(props) {
    const cards = [
        { img: 'https://e-pora-next.vercel.app/assets/img/bg/instructor-bg-02.jpg',name:"Jane Cooper", description: 'Instructor' },
        { img: 'https://e-pora-next.vercel.app/assets/img/bg/instructor-bg-03.jpg',name:"Courtney Henry", description: 'Instructor' },
        { img: 'https://e-pora-next.vercel.app/assets/img/bg/instructor-bg-04.jpg',name:"Devon Lane", description: 'Instructor' },
        { img: 'https://e-pora-next.vercel.app/assets/img/bg/instructor-bg-01.jpg',name:"Devon Lane", description: 'Instructor' },
        
      ];
      const secondcards = [
        { img: 'https://e-pora-next.vercel.app/assets/img/icon/test-ava-02.png',name:"Devon Lane", description: 'Software Engineer' },
        { img: 'https://e-pora-next.vercel.app/assets/img/icon/test-ava-01.png',name:"Courtney Henry", description: 'Sr. UI/UX Designer' },
        { img: 'https://e-pora-next.vercel.app/assets/img/icon/test-ava-03.png',name:"Jenny Wilson", description: 'Content Writer' },
        { img: 'https://e-pora-next.vercel.app/assets/img/icon/test-ava-03.png',name:"Jenny Wilson", description: 'Content Writer' },
        
      ];
  return (
    <>

      <h1 className=" text-3xl md:text-5xl font-bold px-2 md:px-36 my-8">Our Expert Instructor</h1>
      <CardSlider cards={cards} />
      <div className=' flex justify-center'>
      <button className='  hover:bg-black text-white px-4 py-4 rounded-xl text-center' id='btnhome'>All Instructor</button>
      </div>
      
      <div className=' flex flex-col gap-5  my-5 px-2 md:px-16 py-5'>
        <div className=' flex flex-col gap-5 justify-center text-center'>
            <div className=' text-xl font-bold' id='spanele' >Join with us</div>
            <div className=' font-bold text-3xl md:text-4xl'> Which one is suitable for you?</div>
        </div>
        <div className=' flex flex-col md:flex-row gap-5 justify-around '>
            {/* <div className=' border-2 px-5 py-8 flex flex-col md:flex-row rounded-xl shadow-md shadow-slate-300'>
                <div className=' flex flex-col gap-5'>
                    <div className=' font-bold text-2xl'>Do you want to <span className=' font-bold text-orange-500'>Learn</span> here?</div>
                    <div className=' text-slate-700'>Dramatically supply transpa deliverables before & you.</div>
                    <div><button className=' border-2 border-orange-500 px-4 py-4 hover:bg-orange-500 hover:text-white rounded-lg text-orange-500 font-bold'>Join Now</button></div>
                </div>
                <div>
                    <img src="https://e-pora-next.vercel.app/assets/img/bg/suit-bg-01.png" className=' h-60'/>
                </div>
            </div> */}
            <div className=' border-2 px-5 py-8 flex flex-col md:flex-row rounded-xl shadow-md shadow-slate-300'>
                <div className=' flex flex-col gap-5 '>
                    <div className=' font-bold text-2xl'>Do you want to <span className=' font-bold ' id='spanele'>Learn</span> here?</div>
                    <div className=' text-slate-700'>Dramatically supply transpa deliverables before & you.</div>
                    <Link to='/signup'>
                    <button className=' border-2 border-yellow-600  font-bold px-4 py-4 hover:text-white rounded-lg' id='spanele'>Join Now</button>
                    </Link>
                    
                </div>
                <div>
                    <img src="https://e-pora-next.vercel.app/assets/img/bg/suit-bg-02.png" className=' h-60'/>
                </div></div>
        </div>
        
      </div>
  <div className=' py-6 '>
  <h1 className=" text-3xl md:text-5xl font-bold px-2 md:px-36 my-8">Student Testimonials</h1>
  <div className=''>
  <SecondCardSlider secondcards={secondcards} />
  </div>
      
  </div>
      

      

      
    </>
  )
}

export default Instructor
